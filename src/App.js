// import React, {useState} from 'react';
import './components/TopMenu'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import BlogOverzicht from "./assets/pages/BlogOverzicht";
import Blogpost from "./assets/pages/Blogpost";
import TopMenu from "./components/TopMenu";


function App() {
    // // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <TopMenu/>

            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/blogposts">
                    <BlogOverzicht/>
                </Route>

                <Route path="/blogposts/:blogId">
                    <Blogpost/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
