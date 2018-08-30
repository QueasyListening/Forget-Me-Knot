import React, { Component } from 'react';
import './NoteView.css'
import { testData } from '../../testData';
import NoteCard from '../NoteCard/NoteCard'

class NoteView extends Component {
    state = {
        notes: testData,
    }

    render() {
        return (
            
            <div className='noteView'>
              {this.state.notes.map(note => <NoteCard key={note.id} note={note}/>)}
            </div>
        )
    }
}

export default NoteView;