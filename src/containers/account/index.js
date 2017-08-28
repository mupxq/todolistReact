/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {
    Affix,
    Button,
    Col,
    message,
    Row
} from 'antd';

import {
    Link,
    withRouter
} from 'react-router-dom'

//setup redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as todoListActionsFromOtherFile from '../../actions/todoList'

//import components
import TodoListCard from '../../component/Todo/TodoListCard'

import {getTodoListData} from '../../fetch/TodoList/getToDoLists'
import {deleteTodoList} from '../../fetch/TodoList/deleteTodoList'


class Account extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            todoListData: this.props.todoList.todoListData || [],
        }
    }

    componentDidMount() {
        let data = getTodoListData();
        data.then(res => {
            if (res.data.todoListsQuery) {
                let actions = this.props.todoListActions;
                actions.updateTodoList(res.data.todoListsQuery);
                // this.setState({todoListData: res.data.todoListsQuery})
            } else {
                message.error('Please refresh the page!')
            }

        });
    }

    deleteTodoList(listId) {
        let data = deleteTodoList(listId);
        data.then(res => {
            if (res.data.deleteTodoList) {
                let actions = this.props.todoListActions;
                actions.removeTodoList(res.data.deleteTodoList.todoListId);
            } else {
                message.error('Please refresh the page!')
            }

        })
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('prevProps', this.props);
    //     console.log('nextProps', nextProps);
    //
    // }

    shouldComponentUpdate(nextProps, nextState){
        if (JSON.stringify(this.props.todoList) != JSON.stringify(nextProps.todoList)){
            return true;
        } else {
            return false;
        }
    }
    render() {

        const {todoListData} = this.props.todoList;
        console.log("parent", todoListData);
        const todoListCard = todoListData.length > 0
            ? todoListData.map((item, index) => (
                <Col key={item.listId} span={8}>
                    <TodoListCard
                        todoListData={item}
                        deleteTodoList={this.deleteTodoList.bind(this)}
                        editStatus={this.props.todoList.editStatus}

                    />
                </Col>
            )) : undefined;

        return (
            <div>
                <Row>
                    <h2>
                        Welcome {this.props.userInfo.userEmail}
                    </h2>
                </Row>
                <Row>
                    <Col offset={16} span={4}>
                        <Affix>
                            <Button type="primary">
                                <Link to="/newList">New Todo List</Link>
                            </Button>
                        </Affix>
                    </Col>
                </Row>
                <Row gutter={16}>
                    {todoListCard}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        userInfo: state.userInfo
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
)(Account))