/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userId: ''
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // submit the userEmail and password to the LoginAndSignup container
                this.props.loginHandle (values.username, values.password);
            }


        });
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: 'Please input your Email!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default LoginForm = Form.create()(LoginForm);