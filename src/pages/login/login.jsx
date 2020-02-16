import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import {reqLogin} from '../../api'
import logo from './img/logo.png'
import './css/login.less'


class Login extends Component {
    passwordValidator = (rule, value, callback) => {
        if(!value){
            callback('密码必须输入')
        }else if(value.length > 12){
            callback('密码必须小于等于12位')
        }else if(value.length < 4){
            callback('密码必须大于等于4位')
        }else if(!(/^\w+$/).test(value)){
            callback('密码必须是由英文、数字或下划线组成的')
        }else{
            callback()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields(async(err,values) => {
            if(!err){                
                let result = await reqLogin(values)
                const {status,data,msg} = result
                if(status === 0){
                    message.success('登陆成功！')
                    this.props.history.replace('/admin')
                }else{
                    message.warning(msg)
                }    
                
            }
        })
    }
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
                                    {validator:this.passwordValidator}
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