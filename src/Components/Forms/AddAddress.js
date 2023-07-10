import React from 'react';
import { Form, Input, Select, Radio, Button, Row, Col, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Option } = Select;
const {Title} = Typography;

const AddAddress = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
    <Title level={3}>Add Address</Title>
    <Button
      type="link"
      onClick={() => window.history.back()}
      style={{ marginLeft: "auto" }}
    >
      <ArrowLeftOutlined /> Go Back
    </Button>
  </div>
    <Form layout="vertical" onFinish={onFinish}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[{ required: true, message: 'Please enter your mobile number' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Additional Mobile Number"
            name="additionalMobileNumber"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="County"
            name="county"
            rules={[{ required: true, message: 'Please select a county' }]}
          >
            <Select>
              <Option value="nairobi">Nairobi</Option>
              <Option value="mombasa">Mombasa</Option>
              {/* Add more county options */}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Delivery Address"
            name="deliveryAddress"
            rules={[{ required: true, message: 'Please enter your delivery address' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Address Type"
            name="addressType"
            rules={[{ required: true, message: 'Please select an address type' }]}
          >
            <Radio.Group>
              <Radio value="delivery">Delivery Address</Radio>
              <Radio value="pickup">Pickup Address</Radio>
              <Radio value="both">Both</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Set as Default"
            name="setDefault"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{backgroundColor: '#1677FF', color: 'white'}} size="large">
          Save
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default AddAddress;
