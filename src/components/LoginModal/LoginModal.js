import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Modal from 'react-modal'
import './LoginModal.css';
import axios from 'axios';
import config from './../../config.js';

class LoginModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            username: '',
            password:''
        }
        Modal.setAppElement(document.getElementById('root'));
    }


    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        document.getElementById('focus').focus();
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    handleInput = (event) => {
        const input = event.target.placeholder;
        this.setState({ [input]: event.target.value })
    }

    handleLogin = (event) => {
        const credentials = { username: this.state.username, password: this.state.password };
        axios.post(`${config.apiUrl}/user/login`, credentials)
        .then(response => {
            console.log(response);
            this.props.login(response.data.user);
            this.closeModal();
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
        <div>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Login"
            overlayClassName='overlay'
            className='login-modal'
            login={this.props.login}
            >
            <form className='login-elements'>
                <input id='focus' value={this.state.usernameInput} onChange={this.handleInput} placeholder='username' className='login-input' />
                <input value={this.state.passwordInput} onChange={this.handleInput} placeholder='password' className='login-input' />
                <button onClick={(event) => {
                    event.preventDefault(); 
                    this.handleLogin();
                }} 
                type='submit' className='modal-btn login-btn'>Log In</button>
                <button onClick={this.closeModal} className='modal-btn cancel-btn'>Cancel</button>
            </form>
            </Modal>
            <div className='' onClick={this.openModal}>Login</div>
        </div>
        )
    }
}

export default LoginModal;
