import React, { Component, Fragment } from 'react';
import './NoteCard.css';
import NoteView from '../NoteView/NoteView';
import NoteEdit from '../NoteEdit/NoteEdit';
import NoteDelete from '../NoteDelete/NoteDelete'
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

    flagNote = () => {
        const note = document.getElementById(this.props.note._id);
        let colorChoice = note.getElementsByClassName('color-choice')[0];
        colorChoice.style.display === 'flex' ? colorChoice.style.display = 'none' : colorChoice.style.display = 'flex';  
        
    }

    colorRadioSelect = (event) => {
        let note = document.getElementById(this.props.note._id);
        let radios = note.getElementsByClassName('outer-circle');
        for (let i=0; i < radios.length; i++) {
            radios[i].style.border = '2px solid white'
        }

        if (event.target.className === 'circle') {
            note.getElementsByClassName('outer-circle-grey')[0].style.border = '2px solid grey';
            note.style.border = '3px solid grey';
        } else if (event.target.className === 'circle circle-green') {
            note.getElementsByClassName('outer-circle-green')[0].style.border = '2px solid green';
            note.style.border = '3px solid green';
        } else if (event.target.className === 'circle circle-blue') {
            note.getElementsByClassName('outer-circle-blue')[0].style.border = '2px solid blue';
            note.style.border = '3px solid blue';
        } else if (event.target.className === 'circle circle-orange') {
            note.getElementsByClassName('outer-circle-orange')[0].style.border = '2px solid orange';
            note.style.border = '3px solid orange';
        }

        

    }

    render() {
        return (
            <Fragment>
                <div className='note-card' id={this.props.note._id}>
                    <div className='color-choice'>
                        <div className='outer-circle outer-circle-grey'>
                            <div onClick={this.colorRadioSelect} className='circle'></div>
                        </div>
                        <div className='outer-circle outer-circle-green'>
                            <div onClick={this.colorRadioSelect} className='circle circle-green'></div>
                        </div>
                        <div className='outer-circle outer-circle-blue'>
                            <div onClick={this.colorRadioSelect} className='circle circle-blue' ></div>
                        </div>
                        <div className='outer-circle outer-circle-orange'>
                            <div onClick={this.colorRadioSelect} className='circle circle-orange'></div>
                        </div>
                    </div>
                    <div className='card-icons'>
                        <FontAwesomeIcon icon={faFlag} className='card-icon' onClick={this.flagNote}/>
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