import * as actionTypes from './actionTypes';

const initState = {
    user:{

    }
}

function reducer(state=initState,action){
    switch (action.type){
        case actionTypes.LOGINUSER:
        console.log(action.user);
        return {...state,user:action.user,isLogin:true};
        default:
        return state;
    }
}

export default reducer;