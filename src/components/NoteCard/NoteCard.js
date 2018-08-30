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
                <h6>{this.props.note.title}</h6>
                <hr/>
                <div className='cardText'>{this.props.note.text}</div>
            </a>
            </div>
        )
    }
}

export default NoteCard;