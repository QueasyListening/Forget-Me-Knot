import React, { Component } from 'react';
import './NoteList.css'
import { testData } from '../../testData';
import NoteCard from '../NoteCard/NoteCard'

class NoteList extends Component {

    render() {
        return (
            
            <div className='noteList'>
              {this.props.notes.map(note => <NoteCard key={note.id} note={note}/>)}
            </div>
        )
    }
}

export default NoteList;