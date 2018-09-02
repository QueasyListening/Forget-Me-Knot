import React, { Component } from 'react';
import './NoteList.css'
import { testData } from '../../testData';
import NoteCard from '../NoteCard/NoteCard'

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: testData,
        }

    }

    render() {
        return (
            
            <div className='noteList'>
              {this.state.notes.map(note => <NoteCard key={note.id} note={note}/>)}
            </div>
        )
    }
}

export default NoteList;