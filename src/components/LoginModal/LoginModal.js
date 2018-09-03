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
            <div className=''>
                <h2>This is a login modal</h2>
                <input value={this.state.usernameInput} placeholder='username' className='loginInput' />
                <input value={this.state.passwordInput} placeholder='password' className='loginInput' />
                <button onclick={this.props.login} >Log In</button>
                <button onClick={this.closeModal} >Cancel</button>
            </div>
            </Modal>
            <button className="btn" onClick={this.openModal}>Login</button>
        </div>
        )
    }
}

export default LoginModal;
