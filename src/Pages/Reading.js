import React from "react";
import { Layout} from "antd";
import HomeNav from "../Components/Nav/HomeNav";
import logo from "../Assets/logo1.png";

const { Content } = Layout;


function Reading() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HomeNav/>
      <Content style={{ padding: "2rem", backgroundColor: "#CAF0F8" }}>
      <div className="logo">
        <img src={logo} alt="Logo" className="mr-2" />
      </div>
        <div>
            Reading
        </div>
        
      </Content>
    </Layout>
  );
}

export default Reading;
