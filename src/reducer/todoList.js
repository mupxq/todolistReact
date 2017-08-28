/**
 * Created by mupxq on 8/28/17.
 */
import * as actionTypes from '../constants/actionType/todoList'

const initialState = {
    todoListData: [],
    editStatus: 0
};

// todo list reducer
export default function todoList(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TODOLIST_UPDATE:
            return Object.assign({},
                state,
                {todoListData: action.data});
        case actionTypes.TODOLIST_REMOVE:

            return {todoListData: state.todoListData.filter(item => (item.listId !== action.data))};

        case actionTypes.TODOLIST_ADD:
            return Object.assign({}, state, {
                todoListData: [
                    ...state.todoListData,
                    action.data
                ]
            });
        case actionTypes.SINGLETODOLIST_UPDATE:
            return {
                todoListData: state.todoListData.map(item => {
                    if (item.listId === action.data.listId){
                        item = action.data;
                    }
                    return item;
                }),
                editStatus: state.editStatus + 1
            };
        default:
            return state
    }
}