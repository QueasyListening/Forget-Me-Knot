import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NoteList from './components/NoteList/NoteList';
import WelcomeBar from './components/WelcomeBar/WelcomeBar';
import axios from 'axios';
import config from './config';

axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      notes: [],
      loggedInAs: false,
    }
  }

  getNotes = () => {
    // notes retrieved on login
    // add another route to fetch notes 
  }

  // This method will syncronize the users local notes list with what is on the server.
  // It is used by components to force an update once changes have been made
  updateNotes = () => {
    axios
    .get(`${config.apiUrl}/user/notes`)
    .then(response => {
      console.log(response.data);
      this.setState({ notes: response.data });
    })
    .catch(error => {
      console.log(error);
    });
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

  login = (user) => {
    this.setState({ loggedInAs: user.username, notes: user.notes });
  }

  logout = () => {
    // axios call to /api/logout
  }

  search = () => {

  }

  componentDidMount() {
    axios
    .post(`${config.apiUrl}/user/login`, {})
    .then(response => {
      this.setState({ loggedInAs: response.data.username, notes: response.data.notes })
    })
    .catch(error => {
      
    });
  };

  render() {
    return (
      <div className="App">
        <div className='page'>
        <Navbar search={this.search} login={this.login} logout={this.logout} register={this.register} updateNotes={this.updateNotes} />
        <WelcomeBar loggedInAs={this.state.loggedInAs}/>
        <NoteList notes={this.state.notes}
                  addNote={this.addNote}
                  deleteNote={this.deleteNote}
                  updateNotes={this.updateNotes} />
        </div>
      </div>
    );
  }
}

export default App;
