/**
 * Created by mupxq on 8/28/17.
 */
import React from 'react'
import {Card, Button} from 'antd'
import {
    Link,
} from 'react-router-dom'

import Todo from './todo'

class TodoListCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todoListData: props.todoListData.todoList || []
        }
    }

    render() {

        const {todoListData} = this.state;


        const todoListView = todoListData.length > 0
            ? todoListData.map((item, index) => (
                <div key={index}>
                    <Todo todoData={item}/>
                </div>

            )) : undefined;

        const cardAction = <div>

            <Link to={`/${this.props.todoListData.listId}`}><Button icon="edit"/></Link>

            <Button icon="delete" onClick={() => this.props.deleteTodoList(this.props.todoListData.listId)}/>
        </div>;

        return (
            <div>
                <Card style={{width: 240}} bodyStyle={{padding: 0}} extra={cardAction}>
                    {todoListView}
                </Card>
            </div>
        )
    }
}

export default TodoListCard
