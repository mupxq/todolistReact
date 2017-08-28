/**
 * Created by mupxq on 8/27/17.
 */
import * as actionTypes from '../constants/actionType/userInfo'

export function updateUserInfo(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}

export function removeUser(data) {
    return {
        type: actionTypes.USERINFO_REMOVE,
        data
    }
}