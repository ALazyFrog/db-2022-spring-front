import "./AdminPage.css";
import Header from "../../component/Header/Header";
import { Input, Button, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined
} from "@ant-design/icons";
import { useState } from "react";
import request from "../../util/request";

function AdminPage() {

  const [isLogin, setIsLogin] = useState(false);
  const [aid, setAid] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  let login = (
    <div className="border">
      <Input
        className="InputBox"
        placeholder="aid"
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
        onClick={() => request('/token', "POST",
          {
            "aid": aid,
            "password": password
          }).then((response) => {
            console.log(response);
            if (response.code == '0') {
              setIsLogin(true);
              console.log(response)
              localStorage.setItem("token", response.data[0].token);
              localStorage.setItem("aid", aid);
              console.log(localStorage.getItem("token"))
            }
            else {
              alert(response.message);
            }
          })}
      >
        Sign in
      </Button>
    </div>
  );
  let adminInfo = (
      <div>
      <Alert message={"欢迎您，管理员"+aid} type="success" showIcon />
      <br />
      <div className="border">
      <Input
        className="InputBoxAdmin"
        placeholder="aid"
        onChange={(event) => { setAid(event.target.value) }}
      />
      <Input
        className="InputBoxAdmin"
        placeholder="name"
        onChange={(event) => { setName(event.target.value) }}
      />
      <Input
        className="InputBoxAdmin"
        placeholder="email"
        onChange={(event) => { setEmail(event.target.value) }}
      />
      <Input.Password
        className="InputBoxAdmin"
        placeholder="password"
        onChange={(event) => { setPassword(event.target.value) }}
      />
      <Button
        className="ButtonAdmin"
        type="primary"
        onClick={() => {
          // TODO: 留一个新建管理员的坑位
          request("/admin","POST",{"aid":aid,"name":name,"email":email,"password":password}).then(
              (response) => {
                alert(response.message)
              }
          )
        }}
      >
        ADD NEW ADMIN
      </Button>
    </div>
    </div>

  );
  return (
    <div>
      <Header keyValue="admin" />
      {isLogin ? adminInfo : login}
    </div>
  );
}




export default AdminPage;
