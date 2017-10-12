import * as ActionTypes from './actionTypes';

const initState = {
    config: [{
        path: "/Home/All",
        icon: "user",
        text: "nav1"
    },{
        path: "/Home/nav1",
        icon: "user",
        text: "nav1"
    }]
}

function reducer(state = initState, actions) {
    switch (actions.type) {
        case ActionTypes.SETSIDERCONFIG:
            return { ...state, config: actions.config };
        default:
            return state;
    }
}

export default reducer;