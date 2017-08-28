/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;


class AddTodo extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.addTodoHandler(values)
            }
        });
    };
    render() {
        const { getFieldDecorator} = this.props.form;

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem

                >
                    {getFieldDecorator('todoContent')(
                        <Input  />
                    )}
                </FormItem>

                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                      Add todo
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default AddTodo = Form.create()(AddTodo);
