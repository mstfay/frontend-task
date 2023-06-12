import React from "react";
import { Button, Form, Input, Modal } from "antd";
import "./style.css";

const AddAccount = ({ isAddModalOpen, setIsAddModalOpen, onAccountAdded }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAccountAdded(values);
    form.resetFields();
    setIsAddModalOpen(false);
  };

  return (
    <Modal
      className="my-modal"
      visible={isAddModalOpen}
      onOk={() => setIsAddModalOpen(false)}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form} className="mt-10">
        <Form.Item
          className="input-text"
          name="link"
          label="Sosyal Medya Linki"
        >
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item className="input-text" name="name" label="Sosyal Medya Adı">
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item
          className="input-text"
          name="description"
          label="Açıklama"
        >
          <Input className="custom-input" />
        </Form.Item>
        <div className="flex justify-end mr-3.5">
          <Form.Item className="flex justify-end mb-35">
            <Button className="modal-buttons" htmlType="cancel">
              Vazgeç
            </Button>
          </Form.Item>
          <Form.Item className="flex justify-end ml-5 mb-35">
            <Button className="modal-buttons" style={{ background: "#744bfc", color: "#ffffff" }} htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AddAccount;
