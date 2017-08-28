/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {
    Affix,
    Button,
    Col,
    Row
} from 'antd';

import {
    Link,
} from 'react-router-dom'

//setup redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as todoListActionsFromOtherFile from '../../actions/todoList'

//import components
import TodoListCard from '../../component/Todo/TodoListCard'

import {getTodoListData} from '../../fetch/TodoList/getToDoLists'


class Account extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    //     // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // }

    componentDidMount() {
        let data = getTodoListData();
        data.then(res => {
            console.log(res);
            let actions = this.props.todoListActions;
            actions.updateTodoList(res.todoListsQuery);
        });


    }

    render() {

        const todoListData = this.props.todoList.todoListData || [];
        const todoListCard = todoListData.length > 0
            ? todoListData.map((item, index) => (
                <Col key={index} span={8}>
                    <TodoListCard todoListData={item}/>
                </Col>
            )) : undefined;

        return (
            <div>
                <Row>
                    <Col offset={16} span={4}>
                        <Affix>
                            <Button type="primary">
                                <Link to="/newList">New To Do List</Link>
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
)(Account)