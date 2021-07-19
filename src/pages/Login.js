import React from 'react'
import { Component } from "react";
import { Layout } from 'antd';
const { Header, Footer,Content } = Layout
import '../style/login.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import _ from 'lodash'

class Login extends Component{

   onFinish = (values) => {
      console.log('Received values of form: ', values);
      if(!_.isEmpty(values)){  
         this.props.history.push('/home')
      }
    };
  
    render(){
       return (
           <Layout className='Layout' style={{backgroundColor: "white"}}>
             <Header className='header'>
                Winer后台管理系统
             </Header>
             <Content className='content'>
               <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                  remember: true,
                  }}
                  onFinish={this.onFinish}
               >
                  <Form.Item
                  name="username"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your Username!',
                     },
                  ]}
                  >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                  name="password"
                  rules={[
                     {
                        required: true,
                        message: 'Please input your Password!',
                     },
                  ]}
                  >
                  <Input
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     type="password"
                     placeholder="Password"
                  />
                  </Form.Item>
                  <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  </Form.Item>

                  <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                     Login
                  </Button>
                  </Form.Item>
               </Form>
             </Content>
             <Footer className='footer'>
               Copyright © 2021 Lodash 中文网
             </Footer>
           </Layout>
       ) 
    }
}

export default Login 