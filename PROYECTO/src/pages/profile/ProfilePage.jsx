import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const ProfilePage = ({ user }) => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log('We are  in Route:', location.pathname)

    const navigateTo = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }

    
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => goBack()}>Go Back</button>
            <button onClick={  () => navigateTo('/tasks')}>Yor Task List</button>

        </div>
    );
}

export default ProfilePage;
