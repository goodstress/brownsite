import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Art from "./views/Art/Art"
import home from "./views/home/home"
import medicine from "./views/medicine/medicine"
import architecture from "./views/Art/architecture"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import animationTest from "./views/animationTest/animationTest"
import Poetry from "./views/Art/Poetry"
import politics from "./views/politics/politics"
import metal from "./views/metal/metal"
import interior from "./views/interior/interior"
import importance from "./views/importance/importance"
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
                    <Link to="/art">
                      <Icon type="picture" />
                      Art
                  </Link>

                  </Menu.Item>
                  <Menu.Item key="3">
                  <Link to="/architecture">
                  <Icon type="home" />
                    Architecture
                  </Link>

            </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/Poetry">
                      <Icon type="file-text" />
                      Poetry
                  </Link>

                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="5" >
                  <Link to="/medicine">
                    <Icon type="medicine-box" />
                    Medicine
                </Link>

                </Menu.Item>

                <Menu.Item key="6">
                  <Link to="/interior"> <Icon type="home" />
                    Interior Design</Link>


                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/metal">
                    <Icon type="gold" />
                    Metallurgy
                </Link>
                </Menu.Item>
                <Menu.Item key="8">
                <Link to="/politics"> 
                <Icon type="flag" /> 
                Politics

                
                </Link>


                </Menu.Item>
                <Menu.Item>

                  <Link to="/importance">
                  <Icon type="exclamation" />
                  Importance of Taoism
                  
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Taoism</Breadcrumb.Item>
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
                <Route path="/medicine" component={medicine} />
                <Route path="/Art" component={Art} />
                <Route path="/Poetry" component={Poetry} />
                <Route path="/interior" component={interior} />
                <Route path="/metal" component={metal} />
                <Route path="/architecture" component={architecture} />
                <Route path="/politics" component={politics} />
                <Route path="/importance" component={importance} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div >
    )
  }








}

export default App;