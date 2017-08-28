/**
 * Created by mupxq on 8/24/17.
 */
import {combineReducers} from 'redux'

import userInfo from './userInfo'
import todoList from './todoList'

export default combineReducers({
    userInfo,
    todoList
});