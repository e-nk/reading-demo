import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import { ConfigProvider } from 'antd';
import Home from './Pages/Home';
import Reading from './Pages/Reading';
import Login from './Components/Auth/LoginForm';
import Signup from './Components/Auth/SignupForm';
import AdminLogin from './Components/Auth/Admin';

function App() {
  return (
    <ConfigProvider prefixCls="antd">
      <div style={{ fontFamily: 'font-sans' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/*" element={<Navbar />} />
            <Route path="/reading" element={<Reading/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/teachers-lounge" element={<AdminLogin />} />

          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
