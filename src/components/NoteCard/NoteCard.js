import React, { Component } from 'react';
import './NoteCard.css';
import NoteView from '../NoteView/NoteView';

class NoteCard extends Component {
    
    handleClick = () => {
        console.log('Clicked on note');
    }

    render() {
        return (
            <div className='noteCard'>
                <NoteView title={this.props.note.title} text={this.props.note.text} />
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