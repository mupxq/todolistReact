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
        };
        console.log(props);
    }




    render() {

        const todoListData = this.props.todoListData.todoList;


        const todoListView = todoListData.length > 0
            ? todoListData.map((item, index) => (
                    <Todo key={index} {...this.props} todoData={item}/>
            )) : undefined;

        const cardAction = <div>

            <Link to={`/${this.props.todoListData.listId}`}><Button icon="edit"/></Link>

            <Button icon="delete" onClick={() => this.props.deleteTodoList(this.props.todoListData.listId)}/>
        </div>;

        return (
            <div>
                <Card style={{width: 240}} extra={cardAction}>
                    <ul>
                        {todoListView}
                    </ul>

                </Card>
            </div>
        )
    }
}

export default TodoListCard
