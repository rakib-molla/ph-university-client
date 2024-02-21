import { Button, Row } from "antd";
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

  const defaultValues = {
      id:"A-0001",
      password:"admin123" 
  
  }

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Login in");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
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

  return (
    <Row justify={'center'} align={'middle'} style={{height: '100vh'}}> 
    <PHForm onSubmit={onSubmit}  defaultValues={defaultValues}>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password:" />
      <Button htmlType="submit">Login</Button>
    </PHForm>
    </Row>

  );
};

export default Login;
