import React from "react";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <Link to="/about">
            <img
                src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
                alt="example"
            />
        </Link>
    );
}

export default Dashboard;