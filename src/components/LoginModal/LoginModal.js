import React, { Component, Fragment } from 'react';
import reactDOM from 'react-dom';
import Modal from 'react-modal'
import './LoginModal.css';


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

    handleLogin = () => {
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        return (
        <div>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            overlayClassName='overlay'
            className='login-modal'
            login={this.props.login}
            >
            <div className='login-elements'>
                <input id='focus' value={this.state.usernameInput} onChange={this.handleInput} placeholder='username' className='login-input' />
                <input value={this.state.passwordInput} onChange={this.handleInput} placeholder='password' className='login-input' />
                
                    <button onClick={this.handleLogin} className='modal-btn login-btn'>Log In</button>
                    <button onClick={this.closeModal} className='modal-btn cancel-btn'>Cancel</button>
            
            </div>
            </Modal>
            <div className='' onClick={this.openModal}>Login</div>
        </div>
        )
    }
}

export default LoginModal;
