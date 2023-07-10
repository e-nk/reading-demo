import React from "react";
import PaymentNav from "../Components/Nav/PaymentNav";
import Layout, { Content } from "antd/es/layout/layout";


function Payment(){
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <PaymentNav/>
            <Layout>
                <Content style={{ padding: "20px" }}>
                    <p>Payment</p>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Payment;