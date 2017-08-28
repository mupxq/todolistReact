/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'



class Todo extends React.Component {
    constructor(props, context) {
        super(props, context);
        // get todo data from props
        this.state = {
            todo: props.todoData
        }
    }

    render() {

        const {todo} = this.state;

        return (
            <li
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
            >
                {todo.text}
            </li>
        )
    }
}

export default Todo
