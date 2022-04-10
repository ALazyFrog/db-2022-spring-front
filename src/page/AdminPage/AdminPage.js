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
const [aid, setAid] = useState("");
const [password, setPassword] = useState("");

  let login = (
    <div className="border">
      <Input
        className="InputBox"
        placeholder="username"
        prefix={<UserOutlined />}
        onChange={(event) => {
          setAid(event.target.value);
        }}
      />
      <Input.Password
        className="InputBox"
        placeholder="password"
        prefix={<LockOutlined />}
        onChange={(event) => { setPassword(event.target.value) }}
      />
      <Button
        className="Button"
        type="primary"
        onClick={()=>request('/token',"POST",
            {"aid": "001",
            "password": "123456"}).then((response)=>{
                console.log(response);
                if (response.code == '0'){
                    setIsLogin(true);
                    localStorage.setItem("token",response.data[0].token);
                } 
            })}
      >
        Sign in
      </Button>
    </div>
  );
  let adminInfo = (
    <div className="border">
      {aid},登入成功!
      <Input
        className="InputBox"
        placeholder="aid"
        block
      />
      <Input
        className="InputBox"
        placeholder="name"
        block
      />
      <Input
        className="InputBox"
        placeholder="email"
        block
      />
      <Input.Password
        className="InputBox"
        placeholder="password"
        block
      />
      <Button
        className="Button"
        type="primary"
        onClick={() => {
          // TODO: 留一个新建管理员的坑位
        }}
      >
        ADD
      </Button>
    </div>

  );
  return (
    <div>
      <Header keyValue="admin" />
      {isLogin ? adminInfo : login}
    </div>
  );
}

function adminLogin(){
    
}



export default AdminPage;
