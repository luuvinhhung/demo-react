import React, { Component } from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
import './SliderLayout.scss'
const { Sider } = Layout;

class SiderLayout extends Component {
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
        return (
            <Sider width={200}
                theme='light'
                style={{ background: "white" }}
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['3']} justify="center" align="left">
                    <div style={{ height: 60, paddingTop: 20, fontSize: 20, textAlign: 'center', justifyItems: 'center' }}>
                        <Icon className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </div>
                    <Menu.Item key="1" style={{ height: 60, paddingTop: 10, fontSize: 15 }}>
                        <Icon type="home" style={{ fontSize: 25 }} />
                        <span>Trang chủ</span>
                    </Menu.Item>
                    <Menu.Item key="2" style={{ height: 60, paddingTop: 10, fontSize: 15 }}>
                        <Icon type="contacts" style={{ fontSize: 25 }} />
                        <span>Danh bạ</span>
                    </Menu.Item>
                    <Menu.Item key="3" style={{ height: 60, paddingTop: 10, fontSize: 15 }}>
                        <Icon type="calendar" style={{ fontSize: 25 }} />
                        <span>Lịch hẹn</span>
                    </Menu.Item>
                    <Menu.Item key="4" style={{ height: 60, paddingTop: 10, fontSize: 15 }}>
                        <Icon type="pie-chart" style={{ fontSize: 25 }} />
                        <span>Quản lý</span>
                    </Menu.Item>
                    <Menu.Item key="5" style={{ height: 60, marginTop: window.innerHeight - 390,}}>
                        <Button type='primary' className='login-btn'>LOGIN</Button>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }

}

export default SiderLayout