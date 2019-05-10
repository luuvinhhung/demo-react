import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'
import './HeaderLayout.scss'

export default class HeaderLayout extends Component {
  render () {
    return (
      <Row style={{ height: 64, backgroundColor: 'white' }}>
        <Col span={4}><h2 className='header-text'>Lịch hẹn</h2></Col>
        <Col span={12} offset={4} style={{ height: 64 }}>
          <Button className='header-btn'>
            <Row>
              <Col span={2}><Icon className='icon' type='clock-circle' /></Col>
              <Col><p>Tạo lịch hẹn</p></Col>
            </Row>
          </Button>
          <Button className='header-btn'>
            <Row>
              <Col span={2}><Icon className='icon' type='user' /></Col>
              <Col><p>Tạo mới bệnh nhân</p></Col>
            </Row>
          </Button>
          <Button className='header-btn'>
            <Row>
              <Col span={2}><Icon className='icon' type='file-done' /></Col>
              <Col><p>Tạo mới bệnh án</p></Col>
            </Row>
          </Button>
        </Col>
        <Col span={4}>
          <Button className='notification-btn' type='primary'><Icon className='icon' type='bell' /></Button>
          <Button className='notification-btn' type='primary'><Icon className='icon' type='message' /></Button>
        </Col>
      </Row>
    )
  }
}
