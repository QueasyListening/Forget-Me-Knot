import React, { Component } from 'react';
import './Navbar.css';
import LoginModal from '../LoginModal/LoginModal';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarValue: '',
    }
  }

  handleSearchInput = () => {

  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Forget Me Knot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchBarValue} onChange={this.handleSearchInput} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">My Notes<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Options
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Logout</a>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="btn" href="/publicNotes">Add Note</button>
                </li>
                <li className="nav-item">
                  <LoginModal login={this.props.login} />
                  
                </li>
                <li className="nav-item">
                  <button className="btn" href="/publicNotes">Register</button>
                </li>
              </ul>
            </div>
          </nav>
    )
  }
}

export default Navbar;
