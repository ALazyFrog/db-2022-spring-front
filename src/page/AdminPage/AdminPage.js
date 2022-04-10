import "./AdminPage.css";
import Header from "../../component/Header/Header";
import { Input, Button } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function AdminPage() {
  const [isLogin, setIsLogin] = useState(false);
  let login = (
    <div className="border">
      <Input
        className="InputBox"
        placeholder="username"
        prefix={<UserOutlined />}
      />
      <Input.Password
        className="InputBox"
        placeholder="password"
        prefix={<LockOutlined />}
      />
      <Button
        className="Button"
        type="primary"
        onClick={() => {
          // TODO: judge if login
          setIsLogin(true);
        }}
      >
        Sign in
      </Button>
    </div>
  );
  let adminInfo = <div>雷猴哇，唔系管理员</div>;
  return (
    <div>
      <Header keyValue="admin" />
      {isLogin ? adminInfo : login}
    </div>
  );
}

export default AdminPage;
