import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Blogpost from "../pages/Blogpost";

function PrivateRoute ({ isAuth, children, ...rest }) {
    return (
        <Route {...rest}>
            {isAuth === true ? children : <Redirect to="/"/>}
        </Route>
    );
}

export default PrivateRoute;