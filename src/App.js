import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Art from "./views/Art/Art"
import home from "./views/home/home"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import animationTest from "./views/animationTest/animationTest"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <img src="http://www.humanreligions.info/yy.gif" className='App-logo' alt='logo' height="42" width="42" />
            <div className="logo" ></div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#FFF" }}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <Menu.Item
                  key="1"
                >
                  <Link to="/"> <Icon type="home" />
                    Home</Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="highlight" />
                      The Arts
              </span>
                  }
                >
                  <Menu.Item key="2">
                    <Icon type="bg-colors" />
                    Art
            </Menu.Item>
                  <Menu.Item key="3">
                    <Icon type="home" />
                    Architecture
            </Menu.Item>
                  <Menu.Item key="4">
                    <Icon type="file-text" />
                    Poetry
            </Menu.Item>
                </SubMenu>
                <Menu.Item key="5" >
                  <Link to="/animation">
                    <Icon type="medicine-box" />
                    Medicine
                </Link>

                </Menu.Item>

                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
              </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Route exact path="/" component={home} />
                <Route path="/animation" component={animationTest} />
                <Route path="/Art" component={Art} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div >
    )
  }








}

export default App;