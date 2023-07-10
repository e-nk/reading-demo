import React from "react";
import { Layout } from "antd";
import landing from "../Assets/landing.png";
import HomeNav from "../Components/Nav/HomeNav";
import logo from "../Assets/logo1.png";

const { Content } = Layout;

function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HomeNav/>
      <Content style={{ padding: "2rem", backgroundColor: "#CAF0F8" }}>
      <div className="logo">
        <img src={logo} alt="Logo" className="mr-2" />
      </div> 
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={landing} alt="Landing" style={{ marginLeft: "2rem" }} />
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
