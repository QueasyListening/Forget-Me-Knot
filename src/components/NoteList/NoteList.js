import React, { Component } from 'react';
import './NoteList.css'
import NoteCard from '../NoteCard/NoteCard'

class NoteList extends Component {

    render() {
        return (
            
            <div className='noteList'>
              {this.props.notes.map(note => <NoteCard key={note._id} note={note} updateNotes={this.props.updateNotes}/>)}
            </div>
        )
    }
}

export default NoteList;