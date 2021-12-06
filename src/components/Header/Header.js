import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Header = ({history, isLogged}) => {
    const handleClick = () => {
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div>
                <div onClick={() => history.push('/')}>
                    <h3>Logo goes here</h3>
                </div>
                <div>
                   <NavLink exact to='/'><Home /></NavLink>
                   <NavLink exact to='/explore'><Explore /></NavLink>
                   <button onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header)