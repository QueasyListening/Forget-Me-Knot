import React from 'react';
import './WelcomeBar.css';
import SignupModal from '../SignupModal/SignupModal';

const WelcomeBar = (props) => {
    if (props.loggedInAs) {
        return (
            <div className='welcome'>
                <div className='welcome-text'>{`Welcome: ${props.loggedInAs}`}</div>
                <button className='logout-btn' onClick={props.logout}>Log out</button>
            </div>
        )
    } else {
        return (
            <div className='welcome'>
                <div className='welcome-text'>Log in to view/save your notes!</div>
                <SignupModal login={props.login} />               
            </div>
        )
    }
}

export default WelcomeBar;