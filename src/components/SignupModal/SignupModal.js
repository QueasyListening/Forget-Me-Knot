import React, { Component } from 'react';
import Modal from 'react-modal'
import './SignupModal.css';
import axios from 'axios';
import config from './../../config.js';

class SignupModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            username: '',
            password:'',
            repassword:''
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

        if(this.state[input] !== undefined) {
            this.setState({ [input]: event.target.value }, () => checkPasswordMatch());
        } else {
            this.setState({ repassword: event.target.value }, () => checkPasswordMatch());
        }
        const checkPasswordMatch = () => {
            if (this.state.password.length > 0 && this.state.password === this.state.repassword) {
                document.getElementsByName('password').forEach(element => element.style.border = '2px solid rgb(66, 244, 86)');
            } else {
                document.getElementsByName('password').forEach(element => element.style.border = '2px solid red');
            }
        }
    
    }

    handleSignup = (event) => {
        if (this.state.password === this.state.repassword) {
            const credentials = { username: this.state.username, password: this.state.password };
            axios.post(`${config.apiUrl}/user/register`, credentials)
            .then(response => {
                this.props.login(response.data);
                this.closeModal();
            })
            .catch(error => {
                document.getElementsByClassName('signup-warning')[0].innerHTML = error.response.data.error;
            });
        } else {
            document.getElementsByClassName('signup-warning')[0].innerHTML = 'passwords do not match';
        }
    }

    render() {
        return (
        <div>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Signup"
            overlayClassName='overlay'
            className='login-modal'
            login={this.props.login}
            >
            <form className='login-elements'>
                <input id='focus' value={this.state.usernameInput} onChange={this.handleInput} placeholder='username' className='login-input' />
                <input value={this.state.passwordInput} onChange={this.handleInput} placeholder='password' className='login-input' name='password' type='password' />
                <input value={this.state.repasswordInput} onChange={this.handleInput} placeholder='re-enter password' className='login-input' name='password' type='password' />
                <div className='signup-warning'></div>
                <button onClick={(event) => {
                    event.preventDefault(); 
                    this.handleSignup();
                }} 
                type='submit' className='modal-btn login-btn'>Register</button>
                <button onClick={this.closeModal} className='modal-btn cancel-btn'>Cancel</button>
            </form>
            </Modal>
            <button className='logout-btn' onClick={this.openModal}>Sign up</button>
        </div>
        )
    }
}

export default SignupModal;