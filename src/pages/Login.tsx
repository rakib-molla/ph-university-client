import { Button, Checkbox, Form, Input } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import PHInput from "../components/form/PHInput";
import PHForm from "../components/form/PHForm";

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onFinish = async (values: FieldValues) => {
    const toastId = toast.loading("Login in");

    try {
      const userInfo = {
        id: values.id,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something Went Wrong", { id: toastId, duration: 2000 });
    }
  };

  const onFinishFailed = (errorInfo: FieldValues) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    id?: string;
    password?: string;
    remember?: string;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="userId" label="ID:" />
      </div>
      <div>
        <PHInput type="text" name="password" label="Password:" />
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
