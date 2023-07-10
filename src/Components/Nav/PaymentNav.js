import React from "react";
import { Link} from "react-router-dom";
import { Layout, Menu } from "antd";
import { PlusOutlined} from "@ant-design/icons";

const { Header } = Layout;
function PaymentNav(  ){
    return(
        <Header className="payment-nav">
            <Menu mode="horizontal" theme="dark" selectable={false}>
            <Menu.Item key="/payment" className="payment" disabled>
                <Link to="/payment">Payments</Link>
            </Menu.Item>
            <Menu.Item key="/add-Payment" icon={<PlusOutlined />}>
                <Link to="/add-payment">Add Payment</Link>
            </Menu.Item>
            </Menu>

        </Header>
    )
}

export default PaymentNav;