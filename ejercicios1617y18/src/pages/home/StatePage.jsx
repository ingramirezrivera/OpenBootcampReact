import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = (props) => {

    const location = useLocation();

    console.log('location', location)
    console.log('Location', location.state);//State Sent
    console.log('Query Params', location.search);//QueryParams Sent

    return (
        <div>

            <h1>State: {location.state ? 'The user is Online' : 'The user is Offline'} </h1>
            <h1>QueryState Params: {location.search ? 'The user is Online' : 'The user is Offline'}</h1>
            
        </div>
    );
}

export default StatePage;
