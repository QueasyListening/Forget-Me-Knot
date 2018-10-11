import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import './NoteDelete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import config from '../../config';

class NoteDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
        Modal.setAppElement(document.getElementById('root'));
    }
    
    componentDidMount() {
    }
    

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    afterOpenModal = () => {
        document.getElementById('focus').focus();
    }

    deleteNote = (event) => {
        event.preventDefault();
        axios
        .delete(`${config.apiUrl}/user/notes/${this.props.note._id}`)
        .then(response => {
            console.log(response);
            // This method syncs the app.js state with the server
            this.props.updateNotes();
            this.closeModal();
        })
        .catch(error => {
            //@TODO display error in modal if ajax request fails
            console.log(error);
        });
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
                    <div className='note-delete-form'>
                        <h1>Are you sure you want to delete this note?</h1>
                        <button className='modal-btn del-btn' id='focus' onClick={this.deleteNote}>Delete Note</button>                        
                        <button className='modal-btn' onClick={this.closeModal}>Cancel</button>
                    </div>
                </Modal>
                <FontAwesomeIcon className='card-icon' icon={faTrashAlt} onClick={this.openModal}/>
            </Fragment>
        )
    }
}

export default NoteDelete;