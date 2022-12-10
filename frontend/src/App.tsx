import { Button, Col, ConfigProvider, Layout, Row, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import CoffeesMenu from './components/CoffeesMenu';

const coffeeItems = [
  {
    label: <Link to={"coffees"}>All</Link>,
    key: "item-1",
  },
  {
    label: <Link to={"coffees/detail"}> Add a new coffee</Link>,
    key: "item-2",
  }
];

const aboutUsItems = [
  {
    label: "Coming soon...",
    key: "item-1",
  },
  {
    label: "Coming soon...",
    key: "item-2",
  },
];

const App: React.FC = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          components:{
            Button: {
              colorPrimary: '#000',
              colorPrimaryHover:'#444',
            }
          }
        }}
      >
        <Layout style={{ height: "100vh", position: "absolute" }} className="layout">
          <Header>
            <Row gutter={20}>
              <Col lg={8}>
                <Link to={"/"}>
                  <Button className='w-100'> Home </Button>
                </Link>
              </Col>
              <Col lg={8}>
                <CoffeesMenu items={coffeeItems}>Coffees</CoffeesMenu>
              </Col>
              <Col lg={8}>
                <CoffeesMenu items={aboutUsItems}>About us</CoffeesMenu>
              </Col>
            </Row>
          </Header>
          <Content className="content" style={{width: "100vw"}}>
            <Row className="flex-centerize h-100 w-100">
              <Outlet />
            </Row>
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default App;
