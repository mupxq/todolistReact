/**
 * Created by mupxq on 8/27/17.
 */
import * as actionTypes from '../constants/actionType/userInfo'

const initialState = {};

// user info reducer
export default function userInfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        case actionTypes.USERINFO_REMOVE:
            return {};
        default:
            return state
    }
}