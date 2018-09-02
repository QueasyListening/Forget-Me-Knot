import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NoteList from './components/NoteList/NoteList';
import LoginModal from './components/LoginModal/LoginModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      notes: [],
    }
  }

  getNotes = () => {
    // notes retrieved on login
    // add another route to fetch notes 
  }

  updateNotes = () => {

  }

  addNote = (newNote) => {
    const tempNotes = this.state.notes;
    tempNotes.push(newNote);
    this.setState({ notes: tempNotes})
  }

  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter((note) => {
      note._objectid !== noteId;
    });
  }

  register = () => {
    
  }

  login() {
    this.openModal;
  }

  logout = () => {
    // axios call to /api/logout
  }

  search = () => {

  }

  componentDidMount() {
    // alert('You can\'t save notes unless you are logged in. If ou don\'t have an account click register to make one' );
  }

  render() {
    return (
      <div className="App">
        <div className='page'>
        <Navbar search={this.search} login={this.login} logout={this.logout} register={this.register}/>
        <NoteList notes={this.state.notes}
                  addNote={this.addNote}
                  deleteNote={this.deleteNote} />
        </div>
      </div>
    );
  }
}

export default App;
