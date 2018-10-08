import React, { Component } from 'react';
import './NoteCard.css';
import NoteView from '../NoteView/NoteView';
import NoteEdit from '../NoteEdit/NoteEdit';
import NoteDelete from '../NoteDelete/NoteDelete'

class NoteCard extends Component {
    
    handleClick = () => {
        console.log('Clicked on note');
    }

    render() {
        return (
            <div className='noteCard'>
                <div className='card-icons'>
                    <NoteView title={this.props.note.title} text={this.props.note.text} />
                    <NoteEdit note={this.props.note} updateNotes={this.props.updateNotes} />                 
                    <NoteDelete note={this.props.note} updateNotes={this.props.updateNotes} />
                </div>
                <div onClick={this.handleClick} >
                    <h3>{this.props.note.title}</h3>
                    <hr/>
                    <div className='card-text'>{this.props.note.text}</div>
                </div>
                
            </div>
        )
    }
}

export default NoteCard;