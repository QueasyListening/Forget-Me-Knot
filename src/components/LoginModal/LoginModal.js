import React, { Component, Fragment } from 'react';
import reactDOM from 'react-dom';
import Modal from 'react-modal'
import './LoginModal.css';


class LoginModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
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
        <div className='loginModal'>
            <Modal
            className='loginModal'
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            >
            <h2>This is a login modal</h2>
            <button onClick={this.closeModal} >Exit</button>
            </Modal>
            <button className="btn" onClick={this.openModal}>Login</button>
        </div>
        )
    }
}

export default LoginModal;
