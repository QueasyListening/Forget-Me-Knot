import React, { Component } from 'react';
import Modal from 'react-modal';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            id: '',
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

    render() {
        return (
            <div>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel={this.title}
                overlayClassName='overlay'
                className='login-modal'
                >
                    <div>
                        <div className='note-title'>{this.title}</div>
                        <hr/>
                        <p className='note-text'>{this.text}</p>
                    </div>
                </Modal>
                <a onClick={this.openModal} className='fa fa-eye' aria-hidden='true'></a>
            </div>
        )
    }
}

export default NoteView;