import React from "react";
import MyAddressNav from "../Components/Nav/MyAddressNav";
import Layout, { Content } from "antd/es/layout/layout";


function Addresses(){
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <MyAddressNav/>
            <Layout>
                <Content style={{ padding: "20px" }}>
                    <p>Addresses</p>
                </Content>
            </Layout>
        </Layout>
        
    )
}

export default Addresses;