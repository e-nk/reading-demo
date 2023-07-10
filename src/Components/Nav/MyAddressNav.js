import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Header } = Layout;

function MyAddressNav() {
  
  return (
    <Header className="my-address-nav">
      <Menu mode="horizontal" theme="dark" selectable={false}>   
        <Menu.Item key="/my-addresses" className="my-addresses" disabled>
          <Link to="/my-addresses">My Addresses</Link>
        </Menu.Item>
        <Menu.Item key="/add-address" icon={<PlusOutlined />}>
          <Link to="/address/create">Add Address</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default MyAddressNav;
