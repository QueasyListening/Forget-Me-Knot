import React, { Component } from 'react';
import './Navbar.css';
import LoginModal from '../LoginModal/LoginModal';
import NoteAdd from '../NoteAdd/NoteAdd';
import AboutModal from '../AboutModal/AboutModal'
import logo from '../../images/string-on-finger.png';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBarValue: '',
    }
  }

  handleSearchInput = (event) => {
    this.setState({ searchBarValue: event.target.value }, () => this.props.search(this.state.searchBarValue));
  }

  toggleDropDown = () => {
    const nav = document.getElementsByClassName('navbar')[0];
    const dropDownItems = document.getElementsByClassName('drop-down-item');
    //dropDown.classList.toggle('active');
    if (nav.style.height < '300px') {
      nav.style.height = '350px';
      window.setTimeout(() => {
        for (let i = 0; i < dropDownItems.length; i++) {
          dropDownItems[i].style.display = 'block';
          dropDownItems[i].style.opacity = '1.0';
        }
      
      }, 200);
    } else {
      nav.style.height = '125px';
      for (let i = 0; i < dropDownItems.length; i++) {
        dropDownItems[i].style.opacity = '0.0';
      }
    }
  }

  render() {
    return (
        <nav className='navbar'>
            <div className='logo-text-img'>
            <div className='nav-title'>Forget Me Knot</div><img className='logo' alt='hand icon with a red bow around pointer finger' src={logo}/>
            </div>
            <div className='navbar-items'>
              <ul>
                <li className='nav-item'><NoteAdd updateNotes={this.props.updateNotes} /></li>
                <li className='nav-item'><LoginModal login={this.props.login}/></li>
                <li className='nav-item'><AboutModal /></li>
              </ul>
            </div>
            <form className='search'>
              <input className='search-field' onChange={this.handleSearchInput}></input>
              <button className='search-btn' onClick={(event) => event.preventDefault()}>Search</button>
            </form>
            <div className='hamburger' onClick={this.toggleDropDown}>
              <div className='lines'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>
            </div>
            <div className='drop-down' id='drop-down'>
              <ul>
                <li className='nav-item drop-down-item'><NoteAdd updateNotes={this.props.updateNotes} /></li>
                <li className='nav-item drop-down-item'><LoginModal login={this.props.login} /></li>
                <li className='nav-item drop-down-item'><AboutModal /></li>
              </ul>
            </div>
          </nav>
    )
  }
}

export default Navbar;
