import React from 'react';
import { Layout, Menu } from 'antd';
import {
  BoxPlotOutlined,
  InboxOutlined,
  UploadOutlined,
  CheckOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const MyPackageNav = () => {
  return (
    <Header className="my-package-nav">
      <Menu mode="horizontal" theme="dark" selectable={false}>
      <Menu.Item key="my-packages" className="my-packages" disabled>
          My Packages
        </Menu.Item>
        <Menu.Item key="received" icon={<BoxPlotOutlined />}>
          Received
        </Menu.Item>
        <Menu.Item key="incoming" icon={<InboxOutlined />}>
          Incoming
        </Menu.Item>
        <Menu.Item key="sent" icon={<UploadOutlined />}>
          Sent
        </Menu.Item>
        <Menu.Item key="delivered" icon={<CheckOutlined />}>
          Delivered
        </Menu.Item>
        
      </Menu>
    </Header>
  );
};

export default MyPackageNav;
