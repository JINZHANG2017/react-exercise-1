import React, { Component } from 'react';
import img from '../assets/avatar.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <img alt="" className="image-size" src={img}></img>
        <h1>HELLO</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </header>
    );
  }
}

export default Header;
