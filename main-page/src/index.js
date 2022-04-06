import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
const headerstyle = {
  width: 'fit-content',
  margin: 'auto',
  fontFamily: 'Microsoft YaHei',
  fontSize: 300,

}

ReactDOM.render(
  <>
    <header style={headerstyle} >图书管理系统</header>
    <Divider></Divider>
  </>
  ,
  document.getElementById('header')
);


ReactDOM.render(

  <Row justify="space-between">
    <Col><Button type='primary' size="large">管理员</Button></Col>
    <Col><Button type='primary' size="large">借书</Button></Col>
    <Col><Button type='primary' size="large">还书</Button></Col>
    <Col><Button type='primary' size="large">查询</Button></Col>
    <Col><Button type='primary' size="large">办卡</Button></Col>
  </Row>
  ,
  document.getElementById('buttons')
);