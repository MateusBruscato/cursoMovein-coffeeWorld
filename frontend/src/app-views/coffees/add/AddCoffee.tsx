import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Collapse, DatePicker, Divider, Form, Input, message, Row, Select, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import Title from "antd/es/typography/Title";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { CoffeePatchInterface, CoffeePostInterface } from "../../../interfaces/coffee.interface";
import { useCoffee } from "../../../stores/coffee.store";
import { useProducer } from "../../../stores/producer.store";
import { useRoastery } from "../../../stores/roastery.store";

const AddCoffee = () => {
  const { createCoffee, updateCoffee, findCoffeeById, coffee, setCoffeNull } = useCoffee();
  const { getProducers, producers } = useProducer();
  const { getRoasteries, roasteries } = useRoastery();
  const [form] = useForm();
  const [producerSelect, setProducerSelect] = useState(false);
  const [roasterySelect, setRoasterySelect] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCoffeNull();
    form.resetFields();
  }, [location]);

  useEffect(() => {
    if (id) {
      findCoffeeById(id);
    }

  }, []);

  useEffect(() => {
    if (coffee) {
      setFormValues();
    }
  }, [coffee]);

  const setFormValues = () => {
    form.setFieldsValue({
      id: coffee?.id,
      variety: coffee?.variety,
      height: coffee?.height,
      process: coffee?.process,
      scaa: coffee?.scaa,
      roast_date: coffee?.roast_date,
      date: dayjs(coffee?.roast_date, "YYYY-MM-DD"),
      notes: coffee?.notes,
      price: coffee?.price,
      producer: coffee?.producer.producer_id,
      roastery: coffee?.roastery.roastery_id,
    });
  };

  useEffect(() => {
    form.resetFields();
    getProducers();
    getRoasteries();
  }, []);

  const onBack = () => {
    navigate(-1);
  };

  const onFinish = async (values: CoffeePostInterface | CoffeePatchInterface) => {
    delete values.date;
    if (id) {
      let result = await updateCoffee(values);
      if (result instanceof Error) message.error("Failed to edit coffee!");
      else {
        message.success("Coffee was edited!");
        onBack();
      }
    } else {
      let result = createCoffee(values);
      if (result instanceof Error) message.error("Failed to add coffee!");
      else {
        message.success("Coffee added!");
        onBack();
      }
    }
  };

  const handleSelectProducer = () => {
    setProducerSelect(!producerSelect);
  };

  const handleSelectRoastery = () => {
    setRoasterySelect(!roasterySelect);
  };

  const setRoastDate = (values: any) => {
    form.setFieldsValue({ roast_date: values });
  };

  return (
    <Col lg={16} style={{ margin: "auto" }}>
      <Card>
        <Title style={{ paddingTop: "0px", paddingLeft: 0 }} className="text-left p-2 pb-0" level={2}>
          <PlusOutlined /> New Coffe
        </Title>
        <Form form={form} layout="vertical" onFinish={onFinish} name="basic" initialValues={{ remember: true }} autoComplete="off">
          <Row className="flex-centerize" gutter={30}>
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
            <Col lg={6}>
              <Form.Item label="Variety" name="variety" rules={[{ required: true, message: "Please input the coffee variety!" }]}>
                <Input placeholder="Ex. Catuaí" />
              </Form.Item>
            </Col>

            <Col lg={6}>
              <Form.Item label="Height (m)" name="height" rules={[{ required: true, message: "Please input the coffee height!" }]}>
                <Input placeholder="Ex. 1100" />
              </Form.Item>
            </Col>

            <Col lg={6}>
              <Form.Item label="Process" name="process" rules={[{ required: true, message: "Please input the coffee process!" }]}>
                <Input placeholder="Ex. Washed" />
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item label="SCAA" name="scaa" rules={[{ required: true, message: "Please input the coffee pontuation!" }]}>
                <Input placeholder="Ex: 89.5" />
              </Form.Item>
            </Col>
          </Row>

          <Row className="flex-centerize" gutter={30}>
            <Col lg={7}>
              <Form.Item hidden name="roast_date" >
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Roast Date">
                <DatePicker mode="date" onBlur={(e) => setRoastDate(e.target.value)} />
              </Form.Item>
            </Col>

            <Col lg={7}>
              <Form.Item label="Sensorial notes" name="notes" rules={[{ required: true, message: "Please input the coffee notes!" }]}>
                <Input placeholder="Ex. Cocoa and Hazelnut" />
              </Form.Item>
            </Col>

            <Col lg={7}>
              <Form.Item label="Price (250g)" name="price">
                <Input placeholder="Ex. 29.5" />
              </Form.Item>
            </Col>
          </Row>

          <Divider type="horizontal" />
          <Row>
            <Title level={3}>Producer </Title>
          </Row>
          <Row gutter={30} className="flex-centerize">
            <Col xs={22} sm={20} md={16} lg={16}>
              <Form.Item label="Check if the producer is on the list: " name="producer">
                <Select disabled={producerSelect} placeholder="Select..." options={producers.map((producer) => ({ label: `${producer.farmer} - ${producer.farm}`, value: producer.producer_id }))} />
              </Form.Item>
            </Col>
          </Row>
          <Collapse destroyInactivePanel onChange={handleSelectProducer} ghost>
            <Collapse.Panel showArrow={false} className="w-100" header="Didn't find the producer? Add a new one!" key={1}>
              <Row className="flex-centerize" gutter={30}>
                <Col lg={8}>
                  <Form.Item label="Farmer's name" name={["producer", "farmer"]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8}>
                  <Form.Item label="Farm" name={["producer", "farm"]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8}>
                  <Form.Item label="Region" name={["producer", "region"]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row className="flex-centerize" gutter={30}>
                <Col lg={7}>
                  <Form.Item label="City" name={["producer", "city"]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={7}>
                  <Form.Item label="District" name={["producer", "district"]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={7}>
                  <Form.Item label="Country" name={["producer", "country"]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Collapse.Panel>
          </Collapse>

          <Divider type="horizontal" />
          <Row>
            <Title level={3}>Roastery </Title>
          </Row>
          <Row gutter={30} className="flex-centerize">
            <Col xs={22} sm={20} md={16} lg={16}>
              <Form.Item label="Check if the roastery is on the list: " name="roastery">
                <Select disabled={roasterySelect} placeholder="Select..." options={roasteries.map((roastery) => ({ label: roastery.company, value: roastery.roastery_id }))} />
              </Form.Item>
            </Col>
          </Row>
          <Collapse destroyInactivePanel onChange={handleSelectRoastery} ghost>
            <Collapse.Panel showArrow={false} className="w-100" header="Didn't find the producer? Add a new one!" key={1}>
              <Row className="flex-centerize" gutter={30}>
                <Col lg={7}>
                  <Form.Item label="Company name" name={["roastery", "company"]}>
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={7}>
                  <Form.Item label="Roaster" name={["roastery", "roaster_name"]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={7}>
                  <Form.Item label="City" name={["roastery", "city"]}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Collapse.Panel>
          </Collapse>
          <Form.Item>
            <Divider type="horizontal" />
            <Button type="primary" htmlType="submit">
              <Typography.Text strong> ADD COFFEE </Typography.Text>
            </Button>
          </Form.Item>
          <Button onClick={onBack}>CANCEL</Button>
        </Form>
      </Card>
    </Col>
  );
};

export default AddCoffee;
