import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HistoryOutlined, BarChartOutlined,BookOutlined, DashboardOutlined, ExperimentOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined, YoutubeOutlined, ReadOutlined } from '@ant-design/icons';
import Profile from "../../Pages/Profile";
import Packages from "../../Pages/Dashboard";
import Addresses from "../../Pages/Addresses";
import Account from "../../Pages/Account";
import Payment from "../../Pages/Payment";
import Shopping from "../../Pages/Shopping";
import logo from "../../Assets/logo2.png";
import TopNav from "../Nav/TopNav";
import SendPackage from "../Forms/SendPackage";
import AddAddress from "../Forms/AddAddress";
import AccountForm from "../Forms/AccountForm";


import Science from "../../Pages/Science";
import News from "../../Pages/News";
import History from "../../Pages/History";
import Literature from "../../Pages/Literature";
import StudentReports from "../../Pages/StudentReports";
import StudentDashboard from "../../Pages/Dashboard";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

function Navbar() {
  const location = useLocation();

  return (
    <div style={{ fontFamily: 'font-sans' }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark" width={200} style={{ background: '#001529' }}>
          <div className="flex items-center justify-center py-4">
            <img src={logo} alt="Logo" className="mr-2" />
            {/* <span className="text-lg text-white">Reading Knack</span> */}
          </div>
          <Menu mode="inline" theme="dark" defaultOpenKeys={['start-reading']}>
            <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="start-reading" title="Start Reading" icon={<ReadOutlined />}>
              <Menu.Item key="/profile" icon={<HistoryOutlined />}>
                <Link to="/history">History</Link>
              </Menu.Item>
              <Menu.Item key="/packages" icon={<BookOutlined />}>
                <Link to="/literature">Literature</Link>
              </Menu.Item>
              <Menu.Item key="/addresses" icon={<ReadOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
              <Menu.Item key="/account" icon={<ExperimentOutlined />}>
                <Link to="/science">Science</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/student-reports" icon={<BarChartOutlined />}>
              <Link to="/student-reports">Reports</Link>
            </Menu.Item>
          </Menu>
          <div className="flex justify-center items-center h-12 bg-gray-800 text-white">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-lg">
              <InstagramOutlined />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-lg">
              <TwitterOutlined />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-lg">
              <FacebookOutlined />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-lg">
              <YoutubeOutlined />
            </a>
          </div>
        </Sider>
        <Layout>
          <Content style={{ padding: '24px' }}>
            <div className="top-nav-container">
              <TopNav />
            </div>
            {location.pathname === '/dashboard' && <StudentDashboard />}
            {location.pathname === '/history' && <History />}
            {location.pathname === '/literature' && <Literature />}
            {location.pathname === '/news' && <News />}
            {location.pathname === '/science' && <Science />}
            {location.pathname === '/student-reports' && <StudentReports/>}


            {location.pathname === '/profile' && <Profile />}
            {location.pathname === '/packages' && <Packages />}
            {location.pathname === '/addresses' && <Addresses />}
            {location.pathname === '/account' && <Account />}
            {location.pathname === '/payment' && <Payment />}
            {location.pathname === '/shopping' && <Shopping />}
            {location.pathname === '/package/create' && <SendPackage />}
            {location.pathname === '/address/create' && <AddAddress/>}
            {location.pathname === '/account' && <AccountForm/>}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Navbar;
