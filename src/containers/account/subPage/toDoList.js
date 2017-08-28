/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {Button, message} from 'antd'
import {
    Link,
    withRouter
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
import {getSingleTodoList} from '../../../fetch/TodoList/getSingleTodoList'
import {updateTodoList} from '../../../fetch/TodoList/updateTodoList'

class ToDoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        let {listId} = this.props;
        // if has listId then fetch the todo List data
        if (listId) {
            let data = getSingleTodoList(listId);
            data.then(res => {
                if (res.data.todoList) {
                    this.setState({todoList: res.data.todoList.todoList})
                } else {
                    message.error('Please refresh the page!')
                }

            });
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

    todoListSubmit() {
        let {todoList} = this.state;
        let {listId} = this.props;
        let actions = this.props.todoListActions;
        if (listId) { // if has listId then update todoList
            let updatedTodoList = {
                todoListId: listId,
                todoList: todoList
            };
            let updateData = updateTodoList(updatedTodoList);
            updateData.then(res => {
                if (res.data.updateTodoList) {
                    actions.updateSingleTodoList(res.data.updateTodoList);
                } else {
                    message.error('Please refresh the page!')
                }

            })
        } else if (todoList.length > 0) { // if dose not has listId then create new todo List
            let data = createTodoList(todoList);
            data.then(res => {
                if (res.data.createTodoList) {
                    actions.addTodoList(res.data.createTodoList);
                } else {
                    message.error('Please refresh the page!')
                }

            })
        } else {
            message.error('The todo list is empty!')
        }

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
                <Button onClick={() => this.todoListSubmit()}>
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
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList))