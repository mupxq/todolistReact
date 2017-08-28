/**
 * Created by mupxq on 8/28/17.
 */
import React from 'react'
import {Card} from 'antd'

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

        return (
            <div>
                <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                    {todoListView}
                </Card>
            </div>
        )
    }
}

export default TodoListCard
