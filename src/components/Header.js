import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

export default class Header extends Component {
  render() {
    const {category} = this.props;

    return (
      <div className='site-header-container'>
        <Headroom>
          <header className='site-header'>
            <nav>
              <div className='site-title'>
                <Link to='/'>
                  <h1>Johan Petri</h1>
                  <span className='site-subtitle'>director, dramaturgue and artistic researcher</span>
                </Link>
              </div>
              <ul>
                <li className={category && (category === 'performances') ? 'active-category' : 'category'}><Link to='/performances'>Performances</Link></li>
                <li className={category && (category === 'radio-plays-and-sound-art') ? 'active-category' : 'category'}><Link to='/radio-plays-and-sound-art'>Radio Plays and Sound Art</Link></li>
                <li className={category && (category === 'artistic-research-projects') ? 'active-category' : 'category'}><Link to='/artistic-research-projects'>Artistic Research Projects</Link></li>
                <li className={category && (category === 'critical-writings') ? 'active-category' : 'category'}><Link to='/critical-writings'>Critical Writings</Link></li>
                <li className={category && (category === 'current-projects') ? 'active-category' : 'category'}><Link to='/current-projects'>Current Projects</Link></li>
              </ul>
            </nav>
          </header>
        </Headroom>
      </div>
    )
  }
}