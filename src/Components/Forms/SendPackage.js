import React, { useState } from 'react';
import { Form, Input, Button, Upload, Select, message, Typography } from 'antd';
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

function SendPackage() {
  const [fileList, setFileList] = useState([]);

  // Handle form submission
  const onFinish = (values) => {
    console.log(values);
    message.success('Package submitted successfully');
    // Redirect to /packages page
    window.location.href = '/packages';
  };

  // Handle file selection
  const onFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  // Handle file removal
  const onFileRemove = (file) => {
    const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(updatedFileList);
  };

  return (
    <div style={{ fontFamily: 'font-sans' }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Title level={3}>Send a Package</Title>
      <Button
        type="link"
        onClick={() => window.history.back()}
        style={{ marginLeft: "auto" }}
      >
        <ArrowLeftOutlined /> Go Back
      </Button>
    </div>

      <Form onFinish={onFinish}>
        <Form.Item
          name="phoneNumber"
          label="Recipient's Phone Number"
          rules={[{ required: true, message: "Please enter recipient's phone number" }]}
        >
          <Input placeholder="e.g. 0701234567" />
        </Form.Item>

        <Form.Item
          name="packageImage"
          label="Package Image"
          rules={[{ required: true, message: 'Please upload package image' }]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onFileChange}
            onRemove={onFileRemove}
          >
            {fileList.length < 5 && (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter package description' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter package price' }]}
        >
          <Input type="number" prefix="KES" />
        </Form.Item>

        <Form.Item
          name="pickupAddress"
          label="Select Pickup Address"
          rules={[{ required: true, message: 'Please select a pickup address' }]}
        >
          <Select>
            <Option value="address1">Address 1</Option>
            <Option value="address2">Address 2</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="idealsiftCode"
          label="Idealsift Code"
          rules={[{ required: true, message: "Please enter recipient's code" }]}
        >
          <Input placeholder="Enter recipient's code" />
        </Form.Item>

        <Form.Item>
            <div style={{ textAlign: 'right'}}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#F7F7F8', color: 'black' }} size="large" className="ml-auto">
            Submit
          </Button>
            </div>
          
        </Form.Item>
      </Form>
    </div>
  );
}

export default SendPackage;
