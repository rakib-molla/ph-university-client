import { Button, Checkbox, Form, Input } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [login, ] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onFinish = async (values: FieldValues) => {
   const toastId = toast.loading('Login in');

    try {
      const userInfo = {
        id: values.id,
        password: values.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser ;
  
      console.log(user);
  
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", {id: toastId, duration: 2000});
      navigate(`/${user.role}/dashboard`)
    } catch (err) {
      toast.error("Something Went Wrong", {id: toastId, duration: 2000});
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

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{ background: "pink", borderRadius: "20px", padding: "10px" }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 80 }}
          style={{ width: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Id"
            name="id"
            rules={[{ required: true, message: "Please input your ID!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
