import React, { Component } from 'react'
import { Layout } from 'antd'
import './FooterLayout.scss'
const { Footer } = Layout
export default class FooterLayout extends Component {
  render () {
    return (
      <Footer className='footer'>
        <div className='status-infor'>
          <div className='dot-color checked'></div>
          <p>Đã check in</p>
        </div>
        <div className='status-infor'>
          <div className='dot-color completed'></div>
          <p>Đã hoàn thành</p>
        </div>
        <div className='status-infor'>
          <div className='dot-color confirmed'></div>
          <p>Đã xác nhận qua điện thoại</p>
        </div>
        <div className='status-infor'>
          <div className='dot-color not-confirm'></div>
          <p>Sẽ gọi điện</p>
        </div>
      </Footer>
    )
  }
}
