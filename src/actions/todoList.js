/**
 * Created by mupxq on 8/28/17.
 */
import * as actionTypes from '../constants/actionType/todoList'

export function updateTodoList(data) {
    return {
        type: actionTypes.TODOLIST_UPDATE,
        data
    }
}

export function removeTodoList(data) {
    return {
        type: actionTypes.TODOLIST_REMOVE,
        data
    }
}

export function addTodoList(data) {
    return {
        type: actionTypes.TODOLIST_ADD,
        data
    }
}export function updateSingleTodoList(data) {
    return {
        type: actionTypes.SINGLETODOLIST_UPDATE,
        data
    }
}