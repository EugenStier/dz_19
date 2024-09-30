import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = () => {
    setSubmittedData({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={2}>Заполните форму</Typography.Title>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Имя" required>
          <Input
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Введите имя"
          />
        </Form.Item>

        <Form.Item label="Описание" required>
          <Input.TextArea
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="Введите описание"
            rows={4}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card style={{ marginTop: "20px" }}>
          <Typography.Title level={4}>Отправленные данные</Typography.Title>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
};
export default App;
