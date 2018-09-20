import React, { Component } from 'react';
import './NoteCard.css';

class NoteCard extends Component {
    
    handleClick = () => {
        console.log('Clicked on note');
    }

    render() {
        return (
            <div className='noteCard'>
            <a onClick={this.handleClick} >
                <h3>{this.props.note.title}</h3>
                <hr/>
                <div className='card-text'>{this.props.note.text}</div>
            </a>
            </div>
        )
    }
}

export default NoteCard;