import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import './NoteEdit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import config from '../../config';

class NoteEdit extends Component {
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
        //document.getElementById('focus').focus();
    }

    handleInput = (event) => {
        if (event.target.className.includes('note-edit-title')) {
            this.setState({ titleInput: event.target.value });
        }

        if (event.target.className.includes('note-edit-text')) {
            this.setState({ textInput: event.target.value });
        }

    }

    updateNote = (event) => {
        event.preventDefault();
        const updatedNote = {};
        if (this.state.titleInput !== '')
            updatedNote.title = this.state.titleInput;
        
        if (this.state.textInput !== '')
            updatedNote.text = this.state.textInput;

        console.log(updatedNote);
        
        axios
        .put(`${config.apiUrl}/user/notes/${this.props.note._id}`, updatedNote)
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
                        <input className='note-edit-title other-stuff' placeholder={this.props.note.title} onChange={this.handleInput}/>
                        <textarea cols='50' rows='8' className='note-edit-text' placeholder={this.props.note.text} onChange={this.handleInput}></textarea>
                        <button className='modal-btn update-btn' type='submit' onClick={this.updateNote}>Update Note</button>                        
                        <button className='modal-btn cancel-btn' onClick={this.closeModal}>Cancel</button>
                    </form>
                </Modal>
                <FontAwesomeIcon className='card-icon' icon={faCog} onClick={this.openModal}/>
            </Fragment>
        )
    }
}

export default NoteEdit;