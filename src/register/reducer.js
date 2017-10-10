import * as ActionTypes from './actionTypes';

const initState = {};

function reducer(state = initState, actions) {
    switch (actions.type) {
        case ActionTypes.REGISTER:
            return { ...state, user: actions.user }
        default:
            return state;
    }
}

export default reducer;