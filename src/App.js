import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import NoteView from './components/NoteView/NoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='page'>
        <Navbar />
        <NoteView />
        </div>
      </div>
    );
  }
}

export default App;
