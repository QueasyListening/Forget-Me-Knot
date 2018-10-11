import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import './AboutModal.css';


class AboutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        }
        Modal.setAppElement(document.getElementById('root'));
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    afterOpenModal = () => {
        //document.getElementById('focus').focus();
    }

    render() {
        return (
            <Fragment>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel={this.title}
                overlayClassName='overlay'
                className='about-modal'
                >
                    <div className='about-modal-content'>
                        <h1>Thanks for checking out Forget Me Knot!</h1>
                        <p>This note keeping web application was developed by me, Josh Coyne, for the purposes 
                            of sharpening and demonstrating my web development abilities. It utilizes React, JavaScript, HTML and CSS to create a completely
                            intereactive, fully responsive web experience. Your notes and user information are stored in a MongoDB via an API 
                            that I wrote using Node.js and express. Feel free to to use it as much or as little as you would like. It's something that
                            I plan to maintain and improve on for a long time!
                        </p>
                        <button className='modal-btn about-btn' onClick={this.closeModal} >Back</button>
                    </div>
                </Modal>
                <div className='' onClick={this.openModal}>About</div>
            </Fragment>
        )
    }
}

export default AboutModal;