import React from 'react';

const Profile = ({location: {state:{username, email, name}}}) => {
    return(
        <div>
            <div>
                <div>{username}</div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
        </div>
    )
}

export default Profile