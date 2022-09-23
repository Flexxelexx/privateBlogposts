import React from "react";
import {useHistory} from 'react-router-dom'


function Dashboard() {

    const history = useHistory();

    const routeChange = () => {
        let path = '/blogposts';
        history.push(path);
    }
    return (
        <>

            <button onClick={routeChange}
            >
                Log in
            </button>

        </>
    );
}

export default Dashboard;