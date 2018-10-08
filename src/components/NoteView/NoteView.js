import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import './NoteView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
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
                className='note-view-modal'
                >
                    <div className='note-view-content'>
                        <h1 className='note-view-title'>{this.props.title}</h1>
                        <hr/>
                        <p className='note-view-text'>{this.props.text}</p>
                    </div>
                </Modal>
                <FontAwesomeIcon className='card-icon' icon={faEye} onClick={this.openModal}/>
            </Fragment>
        )
    }
}

export default NoteView;