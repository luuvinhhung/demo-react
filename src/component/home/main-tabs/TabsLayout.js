import React, { Component } from 'react'
import { Tabs } from 'antd'
import Grid from '../grid/Gird'
const TabPane = Tabs.TabPane
export default class TabsLayout extends Component {
  render () {
    return (
      <Tabs defaultActiveKey='1' style={{ float: 'left', textAlign: 'left', width: '100%' }}>
        <TabPane tab='Ngày' key='1'><Grid /></TabPane>
        <TabPane tab='Tuần' key='2'>Content of Tab Pane 2</TabPane>
        <TabPane tab='Tháng' key='3'>Content of Tab Pane 3</TabPane>
        <TabPane tab='Bác sĩ' key='4'>Content of Tab Pane 1</TabPane>
        <TabPane tab='Phòng' key='5'>Content of Tab Pane 2</TabPane>
        <TabPane tab='Khoa' key='6'>Content of Tab Pane 3</TabPane>
      </Tabs>
    )
  }
}