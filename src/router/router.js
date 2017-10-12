import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../login';
import { Register } from '../register';
import { Home } from '../Home';

// function DefaultRoute(props){
//     return <Redirect to="Login" />
// }

function combineRoute(props) {
    return (
        <div>
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Register" component={Register} />
        </div>
    )
}
export default combineRoute;