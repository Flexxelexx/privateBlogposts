import React from 'react';
import {NavLink} from 'react-router-dom';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <h1>WELKOM</h1>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">Blogoverzicht</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogposts/:blogsID" activeClassName="active-link">Blogposts</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopMenu;