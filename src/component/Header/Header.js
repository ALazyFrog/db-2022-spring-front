import "./Header.css";
import { Menu } from "antd";

function Header(props) {
  let keyValue = props.keyValue;
  return (
    <div className="header">
      图书管理系统
      <Menu selectedKeys={keyValue} mode="horizontal" theme="dark">
        <Menu.Item key="admin">
          <a href="./" target="_self" rel="noopener noreferrer">
            管理员
          </a>
        </Menu.Item>
        <Menu.Item key="import">
          <a href="./import" target="_self" rel="noopener noreferrer">
            导入
          </a>
        </Menu.Item>
        <Menu.Item key="borrow">
          <a href="./borrow" target="_self" rel="noopener noreferrer">
            借书
          </a>
        </Menu.Item>
        <Menu.Item key="return">
          <a href="./return" target="_self" rel="noopener noreferrer">
            还书
          </a>
        </Menu.Item>
        <Menu.Item key="query">
          <a href="./query" target="_self" rel="noopener noreferrer">
            查询
          </a>
        </Menu.Item>
        <Menu.Item key="card">
          <a href="./card" target="_self" rel="noopener noreferrer">
            办卡
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
