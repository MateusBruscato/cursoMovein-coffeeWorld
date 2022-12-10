import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Popconfirm, Row, message } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";
import farmer0 from "../../../assets/farmer0.jpg";
import farmer1 from "../../../assets/farmer1.jpg";
import farmer2 from "../../../assets/farmer2.jpg";
import farmer3 from "../../../assets/farmer3.jpg";
import { useCoffee } from "../../../stores/coffee.store";
import { CoffeeDeleteInterface } from "../../../interfaces/coffee.interface";
import { useNavigate } from "react-router-dom";

const ListCoffee = () => {
  const { getCoffees, coffees, deleteCoffee } = useCoffee();
  const navigate = useNavigate();

  const selectRandomImage = () => {
    const images = [farmer0, farmer1, farmer2, farmer3];
    const randomEntries = Math.floor(Math.random()*4);
    return images[randomEntries];
    
  }

  useEffect(() => {
    getCoffees();
  }, [getCoffees]);

  const handleUpdate = (id: string | number) => {
    navigate(`detail/${id}`)
  }

  const handleDelete = (id: string | number) => {
    let newid = { id } as CoffeeDeleteInterface;
    deleteCoffee(newid)
      .then(() => message.success("Coffee deleted!"))
      .catch(() => message.error("Fail to delete coffee!"));
  };

  const handleGender = (name: string | undefined) => {
    if (name?.charAt(name.length - 1) === "a") {
      return "da";
    } else {
      return "do";
    }
  };
  return (
    <>
      <Row gutter={[100, 30]}>
        {coffees &&
          coffees.map((coffee) => (
            <Col key={coffee.id} className="flex-centerize" xs={24} sm={11} md={10} lg={7} xl={6}>
              <Card className="showButton" hoverable style={{ width: 270 }} cover={<img alt="example" src={farmer3} />}>
                <Meta
                  title={"Café " + handleGender(coffee.producer.farmer?.split(" ", 1)[0]) + ` ${coffee.producer.farmer?.split(" ", 1)}`}
                  description={
                    <div style={{ height: "65px" }}>
                      <div className="cardMeta">
                        <p>Variedade: {coffee.variety}</p>
                        <p> Sensorial: {coffee.notes}</p>
                      </div>
                      <div className="buttonUpDel" style={{ marginTop: "5px" }}>
                        {" "}
                        <Button onClick={() => handleUpdate(coffee.id)} shape="circle" size="large">
                          {" "}
                          <EditOutlined />{" "}
                        </Button>
                        <Divider type="vertical" />
                        <Popconfirm title="Are you sure to delete this coffee?" onConfirm={() => handleDelete(coffee.id)} okText="Yes" cancelText="No">
                          <Button shape="circle" size="large">
                            {" "}
                            <DeleteOutlined />{" "}
                          </Button>
                        </Popconfirm>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default ListCoffee;
