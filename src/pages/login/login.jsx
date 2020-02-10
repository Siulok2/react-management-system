import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import logo from './img/logo.png'
import './css/login.less'

class Login extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="login">
                <div className="header">
                    <img src={logo} alt="logo"/>
                    <h1>商品管理系统</h1>
                </div>
                <div className="content">
                    <h1>用户登陆</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    {required: true, message: '用户名必须输入!'},
                                    {max:12,message:'用户名必须小于等于12位'},
                                    {min:4,message:'用户名必须大于等于4位'},
                                    {pattern:/^\w+$/,message:'用户名必须是由英文、数字或下划线组成的'}                                    
                                ],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '密码必须输入!' },
                                    {max:12,message:'密码必须小于等于12位'},
                                    {min:4,message:'密码必须大于等于4位'},
                                    {pattern:/^\w+$/,message:'密码必须是由英文、数字或下划线组成的'}
                                ],
                            })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                            </Button>
                            
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create()(Login)