import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import './Home.scss'
import SiderLayout from './sider/SiderLayout'
import HeaderLayout from './header/HeaderLayout'
import FooterLayout from './footer/FooterLayout'
import TabsLayout from './main-tabs/TabsLayout'

const { Content } = Layout

export default class Home extends Component {
  render () {
    return (
      <>
        <Layout>
          <SiderLayout />
          <Layout>
            <HeaderLayout />
            {/* <div className='content-header'>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                        </div> */}
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
                height: window.innerHeight - 134
              }}
            >
              <TabsLayout />
            </Content>
            <FooterLayout />
          </Layout>
        </Layout>
      </>
    )
  }
}
