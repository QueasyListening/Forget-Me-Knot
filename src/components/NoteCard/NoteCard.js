import React, { Component, Fragment } from 'react';
import './NoteCard.css';
import NoteView from '../NoteView/NoteView';
import NoteEdit from '../NoteEdit/NoteEdit';
import NoteDelete from '../NoteDelete/NoteDelete';
import FlagPicker from '../FlagPicker/FlagPicker';
import Modal from 'react-modal';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class NoteCard extends Component {
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
                <div className='note-card' id={this.props.note._id} style={{border: `3px solid ${this.props.note.flagColor}`}}>
                    <div className='card-icons'>
                        <FlagPicker noteId={this.props.note._id} flagColor={this.props.note.flagColor} />
                        <NoteView title={this.props.note.title} text={this.props.note.text} />
                        <NoteEdit note={this.props.note} updateNotes={this.props.updateNotes} />                 
                        <NoteDelete note={this.props.note} updateNotes={this.props.updateNotes} />
                    </div>
                    <div className='card-content' onClick={this.openModal}>
                        <h3>{this.props.note.title}</h3>
                        <hr/>
                        <div className='card-text'>{this.props.note.text}</div>
                    </div>
                </div>

                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel={this.title}
                overlayClassName='overlay'
                className='note-view-modal'
                >
                    <div className='note-view-content'>
                        <h1 className='note-view-title'>{this.props.note.title}</h1>
                        <hr/>
                        <p className='note-view-text'>{this.props.note.text}</p>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}

export default NoteCard;