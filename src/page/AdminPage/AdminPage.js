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
import request from "../../util/request";

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
          adminLogin();
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

function adminLogin(){
    request('/token',"POST",
    {"aid": "001",
    "password": "123456"}).then((response)=>{
        if (response.code == '0'){
            setIsLogin(true);
            localStorage.setItem("token",response.data[0].token);
        } 
    });
}



export default AdminPage;
