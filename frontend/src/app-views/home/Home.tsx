import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex-centerize flex-column" style={{width: "100%"}}>
           <Title level={1} style={{ color: "black" }}>
              Welcome to World Coffee!
            </Title>
            <Title level={4} style={{ color: "black" }}>
              Reach out our amazing coffees clicking here!
            </Title>
            <Row>
              <Col>
                <Link to='coffees'><Button>Coffees</Button></Link>
              </Col>
            </Row>
        </div>
    )
}

export default Home;