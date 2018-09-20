import React, { Component, Fragment } from 'react';
import reactDOM from 'react-dom';
import Modal from 'react-modal'
import './LoginModal.css';


class LoginModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            usernameInput: '',
            passwordInput:''
        }
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

    render() {
        return (
        <div>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            overlayClassName='overlay'
            className='loginModal'
            >
            <div className='loginElements'>
                <input id='focus' value={this.state.usernameInput} placeholder='username' className='loginInput' />
                <input value={this.state.passwordInput} placeholder='password' className='loginInput' />
                <div className='d-flex justify-content-center'>
                    <button onclick={this.props.login} className='loginButton btn btn-primary'>Log In</button>
                    <button onClick={this.closeModal} className='cancelButton btn btn-secondary'>Cancel</button>
                </div>
            </div>
            </Modal>
            <div className='' onClick={this.openModal}>Login</div>
        </div>
        )
    }
}

export default LoginModal;
