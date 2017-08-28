/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {Button} from 'antd'
import {
    Link,
} from 'react-router-dom'

//setup redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as todoListActionsFromOtherFile from '../../../actions/todoList'

//import components
import AddTodo from '../../../component/Todo/addToDo'
import Todo from '../../../component/Todo/todo'

//import fetch API
import {createTodoList} from '../../../fetch/TodoList/CreateTodoList'

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
        let data = createTodoList(this.state.todoList);
        data.then(res => {
            let actions = this.props.todoListActions;
            actions.addTodoList(res.createTodoList);
        })
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
                <Button onClick={() => this.todoListSubmit()} >
                    <Link to="/account">Submit</Link>
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todoListActions: bindActionCreators(todoListActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)