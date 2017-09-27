import React from 'react';
import { Route } from 'react-router';
import {tomato} from '../twm';

function combineRoute(props){
    return (
        <div>
            <Route path="/" component={tomato}/>
        </div>
    )
}

export default combineRoute;