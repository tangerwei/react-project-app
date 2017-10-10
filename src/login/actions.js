import * as ActionTypes from './actionTypes';
export const onlogin = (user)=>{
    return {
        type:ActionTypes.LOGINUSER,
        user
    }
} 