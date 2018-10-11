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
      masterNotes: [],
    }
  }

  // This method will syncronize the users local notes list with what is on the server.
  // It is used by components to force an update to the App state once changes have been made
  updateNotes = () => {
    axios
    .get(`${config.apiUrl}/user/notes`)
    .then(response => {
      this.setState({ notes: response.data, masterNotes: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  login = (user) => {
    this.setState({ loggedInAs: user.username });
    this.updateNotes();
  }

  logout = () => {
    axios
    .get(`${config.apiUrl}/user/logout`)
    .then(response => {
      this.setState({ loggedInAs: false });
    })
    .catch(error => {
      console.log(error);
    })
  }

  search = (input) => {
    input = input.toLowerCase();
    const newNotes = this.state.masterNotes.filter(note => note.title.toLowerCase().includes(input) || note.text.toLowerCase().includes(input));
    this.setState({ notes: newNotes });
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_API_URL);
    axios
    .post(`${config.apiUrl}/user/login`, {})
    .then(response => {
      this.setState({ loggedInAs: response.data.username, notes: response.data.notes, masterNotes: response.data.notes });
    })
    .catch(error => {
      
    });
  };

  render() {
    return (
      <div className="App">
        <div className='page'>
        <Navbar search={this.search} login={this.login} updateNotes={this.updateNotes} />
        <WelcomeBar loggedInAs={this.state.loggedInAs} logout={this.logout} register={this.register} login={this.login} />
        <NoteList notes={this.state.notes}
                  updateNotes={this.updateNotes} />
        </div>
      </div>
    );
  }
}

export default App;
