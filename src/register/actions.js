import * as ActionTypes from './actionTypes';

export const register = (user) => ({
    type:ActionTypes.REGISTER,
    user
})