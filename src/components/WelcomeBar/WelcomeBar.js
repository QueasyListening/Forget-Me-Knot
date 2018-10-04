import React from 'react';
import './WelcomeBar.css';

const WelcomeBar = (props) => {
    if (props.loggedInAs) {
        return (
            <div className='welcome'>
                <div className='welcome-text'>{`Welcome: ${props.loggedInAs}`}</div>
                <button className='logout-btn'>Log out</button>
            </div>
        )
    } else {
        return (
            <div className='welcome'>
                <div className='welcome-text'>Log in to view/save your notes!</div>
            </div>
        )
    }
}

export default WelcomeBar;