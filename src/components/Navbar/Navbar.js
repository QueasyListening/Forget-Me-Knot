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

  toggleDropDown = () => {
    const dropDown = document.getElementById('drop-down');
    const nav = document.getElementsByClassName('navbar')[0];
    const dropDownItems = document.getElementsByClassName('drop-down-item');
    console.log(dropDownItems);
    //dropDown.classList.toggle('active');
    if (nav.style.height < '300px') {
      nav.style.height = '350px';
      for (let i = 0; i < dropDownItems.length; i++) {
        dropDownItems[i].style.opacity = '1.0';
      }
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
            <a className='nav-title' href='#'>Forget Me Knot</a>
            <div className='navbar-items'>
              <ul>
                <li className='nav-item'>Home</li>
                <li className='nav-item'><LoginModal/></li>
                <li className='nav-item'>About</li>
              </ul>
            </div>
            <form className='search'>
              <input className='search-field'></input>
              <button className='search-btn'>Search</button>
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
                <li className='nav-item drop-down-item'>Home</li>
                <li className='nav-item drop-down-item'><LoginModal/></li>
                <li className='nav-item drop-down-item'>About</li>
              </ul>
            </div>
          </nav>
    )
  }
}

export default Navbar;
