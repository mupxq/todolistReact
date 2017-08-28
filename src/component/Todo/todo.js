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

    // componentWillReceiveProps(nextProps) {
    //
    //     if (this.props.todoData.completed !== nextProps.todoData.completed) {
    //         console.log(nextProps.todoData.completed);
    //         this.setState({todo: nextProps.todoData});
    //     }
    //
    // }

    render() {

        const {todo} = this.state;

        return (
            <li key={todo.id}
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
