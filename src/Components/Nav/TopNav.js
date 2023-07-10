import React from "react";
import { Layout, Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const { Header } = Layout;
const username = "John Doe";


function TopNav({ onLogout }) {
  

  return (
    <div style={{ fontFamily: 'font-sans' }}>
      <Header className="bg-white shadow-sm">
        <div className="flex items-center justify-between pr-4">
          <Space size={30}>
            <Button
            type="primary"
            shape="round"
            size="default"
            onClick={onLogout}
            style={{ backgroundColor: '#F7F7F8', color: 'black' }}
            
          >
            Student
          </Button>
          </Space>
          <Space size={30}>
          <div>{username}</div>
          <Button
            type="primary"
            shape="round"
            size="default"
            onClick={onLogout}
            style={{ backgroundColor: '#5CE3D4', color: 'black' }}
            icon={<PoweroffOutlined />}
          >
            Logout
          </Button>

          </Space>
          
          
        </div>
        <div className="h-px bg-gray-200" />
      </Header>
    </div>
  );
}

export default TopNav;
