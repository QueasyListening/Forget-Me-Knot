import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import './NoteAdd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import config from '../../config';

class NoteAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            textInput: '',
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
        document.getElementById('focus').focus();
    }

    handleInput = (event) => {
        if (event.target.className.includes('note-edit-title')) {
            this.setState({ titleInput: event.target.value });
        }

        if (event.target.className.includes('note-edit-text')) {
            this.setState({ textInput: event.target.value });
        }

    }

    addNote = (event) => {
        event.preventDefault();
        const newNote = {};
        if (this.state.titleInput !== '')
            newNote.title = this.state.titleInput;
        
        if (this.state.textInput !== '')
            newNote.text = this.state.textInput;
       
        axios
        .post(`${config.apiUrl}/user/notes/`, newNote)
        .then(response => {
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
                className='note-add-modal'
                >
                    <form className='note-edit-form'>
                        <input className='note-edit-title' placeholder='Title' id='focus' onChange={this.handleInput}/>
                        <textarea cols='50' rows='8' className='note-edit-text' placeholder='Text' onChange={this.handleInput}></textarea>
                        <button className='modal-btn update-btn' type='submit' onClick={this.addNote}>Add Note</button>                        
                        <button className='modal-btn cancel-btn' onClick={this.closeModal}>Cancel</button>
                    </form>
                </Modal>
                <div className='' onClick={this.openModal}>New Note</div>
            </Fragment>
        )
    }
}

export default NoteAdd;