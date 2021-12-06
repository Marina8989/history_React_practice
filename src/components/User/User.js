import React from 'react';
import { withRouter} from 'react-router-dom';

const User = ({name, username, email, history}) => {
    const handleClick = () => {
        history.push(`/${username}`, {
            name,
            email,
            username
        })
    }
    return(
        <div>
            <div onClick={handleClick}>{username}</div>
            <div>{name}</div>
        </div>
    )
}

export default withRouter(User)