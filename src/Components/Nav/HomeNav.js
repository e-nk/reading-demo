import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  BookOutlined,
  CrownOutlined,
  LoginOutlined,
  UserAddOutlined,
  AppstoreOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo1.png";

const { Sider } = Layout;

function HomeNav() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapse}
    >
      {/* <div className="logo">
        <img src={logo} alt="Logo" className="mr-2" />
      </div> */}

      <Menu theme="light" mode="vertical">
      <Menu.Item key="0" icon={<AppstoreOutlined />} className="menu-item">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="0" icon={<BookOutlined />} className="menu-item">
          <Link to="/reading">Reading Exercise</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<CrownOutlined />} className="menu-item">
          <Link to="/teachers-lounge">Teacher's Lounge</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LoginOutlined />} className="menu-item">
          <Link to="/login">Log In</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserAddOutlined />} className="menu-item">
          <Link to="/signup">Sign Up</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default HomeNav;
