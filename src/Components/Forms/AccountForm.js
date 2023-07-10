import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const AccountForm = () => {
  const onFinishPersonalInfo = (values) => {
    console.log('Personal Info:', values);
  };

  const onFinishChangePassword = (values) => {
    console.log('Change Password:', values);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Title level={4}>Personal Information</Title>
      <Form layout="vertical" onFinish={onFinishPersonalInfo}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobileNumber"
          rules={[{ required: true, message: 'Please enter your mobile number' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8, backgroundColor: '#1677FF', color: 'white'  }}>
            Update Personal Info
          </Button>
        </Form.Item>
      </Form>

      <Title level={4} style={{ marginTop: 20 }}>Change Password</Title>
      <Form layout="vertical" onFinish={onFinishChangePassword}>
        <Form.Item
          label="Current Password"
          name="currentPassword"
          rules={[{ required: true, message: 'Please enter your current password' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: 'Please enter your new password' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: 'Please confirm your new password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"
          shape="round"
          style={{ backgroundColor: '#1677FF', color: 'white' }}
          
          >           
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AccountForm;
