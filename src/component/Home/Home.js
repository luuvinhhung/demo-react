import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Tabs, Input, Dropdown } from "antd";
import logo from "../img/open-book.png";
import bellIcon from '../img/bell.svg';
import messageIcon from '../img/mess.svg';
import "../Home/Home.css";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const TabPane = Tabs.TabPane;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };

    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Layout>
                    <Header className="header">
                        <img className="logo" src={logo} alt="logo" />
                        <Input className="searchInput" placeholder=" Search" />
                        <Dropdown className='nofBtn' overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                <img src={messageIcon} style={{ width: 30, height: 30 }} alt="message icon" /> <Icon type="down" />
                            </a>
                        </Dropdown>
                        <Dropdown className='nofBtn' overlay={menu2} trigger={['click']}>
                            <a className="ant-dropdown-link" href="#">
                                <img src={bellIcon} style={{ width: 30, height: 30 }} alt="bell notification icon" /> <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Header>
                    <Layout>
                        <Sider width={200}
                            theme='light'
                            style={{ background: "white" }}
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}>

                            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1" className='menuItem' style={{height: 60, paddingTop: 10, fontSize: 20}}>
                                    <Icon type="user" style={{ fontSize: '20px'}} />
                                    <span>nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2" className='menuItem' style={{height: 60, paddingTop: 10, fontSize: 20}}>
                                    <Icon type="video-camera" style={{ fontSize: '20px'}}  />
                                    <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3" className='menuItem' style={{height: 60, paddingTop: 10, fontSize: 20}}>
                                    <Icon type="upload" style={{ fontSize: '20px'}}  />
                                    <span>nav 3</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: "0px 24px 24px"}}>
                            <div className="contentHeader">
                                <Icon style={{ fontSize: '20px'}} 
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                                <Breadcrumb style={{ margin: "16px 0" }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <Content
                                style={{
                                    background: "#fff",
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    height: window.innerHeight-140
                                }}
                            >
                                <h2>CONTENT</h2>
                            </Content>
                        </Layout>
                        <Layout>
                            <Footer className='footer'>
                                
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
