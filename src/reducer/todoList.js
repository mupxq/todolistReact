/**
 * Created by mupxq on 8/28/17.
 */
import * as actionTypes from '../constants/actionType/todoList'

const initialState = {};

// todo list reducer
export default function todoList(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TODOLIST_UPDATE:
            return Object.assign({},
                state,
                {todoListData: action.data});
        case actionTypes.TODOLIST_REMOVE:
            return state.todoListData.filter(item => item.todoListId !== action.data);
        case actionTypes.TODOLIST_ADD:
            return Object.assign({}, state, {
                todoListData: [
                    ...state.todoListData,
                    action.data
                ]
            });
        default:
            return state
    }
}