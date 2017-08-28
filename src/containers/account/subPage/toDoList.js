/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {Button} from 'antd'

//import components
import AddTodo from '../../../component/Todo/addToDo'
import Todo from '../../../component/Todo/todo'



class ToDoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todoList: []
        }
    }
    // set new todo List to state
    addTodoHandler(values) {
        let {todoList} = this.state;
        // create newTodoItem object
        let newTodoItem = {
            id: todoList.length,
            text: values.todoContent,
            completed: false
        };
        todoList.push(newTodoItem);
        this.setState({todoList});
    }

    // toggle item complete status
    toggleTodo(id) {
        let {todoList} = this.state;
        let newTodoList = todoList.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item
        });
        this.setState({todoList: newTodoList});
    }

    todoListSubmit(){
        console.log(this.state.todoList);
    }

    render() {

        const {todoList} = this.state;
        const todoListView = todoList.length > 0
            ? todoList.map((item, index) => (
                <div key={index} onClick={() => this.toggleTodo(item.id)}>
                    <Todo
                          todoData={item}
                    />
                </div>
            )) : undefined;
        return (
            <div>
                <AddTodo addTodoHandler={this.addTodoHandler.bind(this)}/>
                    {todoListView}
                <Button onClick={() => this.todoListSubmit()} >Submit </Button>
            </div>
        )
    }
}

export default ToDoList
