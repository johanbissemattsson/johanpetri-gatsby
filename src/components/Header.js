import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

export default class Header extends Component {
  render() {
    return (
      <header className='site-header'>
        <Headroom>
          <h1><Link to="/">Johan Petri</Link></h1>
          <nav>
            <ul>
              <li><Link to='/performances'>Performances</Link></li>
              <li><Link to='/radio-plays-and-sound-art'>Radio Plays and Sound Art</Link></li>
              <li><Link to='/artistic-research-projects'>Artistic Research Projects</Link></li>
              <li><Link to='/critical-writings'>Critical Writings</Link></li>
              <li><Link to='/current-projects'>Current Projects</Link></li>
            </ul>
          </nav>
        </Headroom>
      </header>
    )
  }
}