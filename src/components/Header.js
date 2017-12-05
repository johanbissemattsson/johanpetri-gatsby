import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';

import Dock from 'react-dock';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDockVisible: false,
    }
  }

  render() {
    const {category} = this.props;

    return (
      <div className='site-header-container'>
        <Headroom>
          <header className='site-header'>
            <nav className='horizontal-menu'>
              <div className='site-title'>
                <Link to='/'>
                  <h1>Johan Petri</h1>
                  <span className='site-subtitle'>director, dramaturgue and artistic researcher</span>
                </Link>
              </div>
              <ul>
                <li className={category && (category === 'performances') ? 'active-category' : 'category'}><Link to='/performances'><span className='nav-link-text'>Performances</span></Link></li>
                <li className={category && (category === 'radio-plays-and-sound-art') ? 'active-category' : 'category'}><Link to='/radio-plays-and-sound-art'><span className='nav-link-text'>Radio Plays and Sound Art</span></Link></li>
                <li className={category && (category === 'artistic-research-projects') ? 'active-category' : 'category'}><Link to='/artistic-research-projects'><span className='nav-link-text'>Artistic Research Projects</span></Link></li>
                <li className={category && (category === 'critical-writings') ? 'active-category' : 'category'}><Link to='/critical-writings'><span className='nav-link-text'>Critical Writings</span></Link></li>
                <li className={category && (category === 'current-projects') ? 'active-category' : 'category'}><Link to='/current-projects'><span className='nav-link-text'>Current Projects</span></Link></li>
              </ul>
              <div className='nav-button-container'><div className='nav-button' onClick={() => this.setState({ isDockVisible: !this.state.isDockVisible })}><i className="material-icons">menu</i></div></div>
            </nav>
          </header>
        </Headroom>
        <nav className='dock-menu'>
          <Dock position='right' isVisible={this.state.isDockVisible} size={0.75} dimMode='opaque' dockStyle={{background: '#ee7202'}}>
          {/* you can pass a function as a child here */}
              <div className='nav-close-button-container'><div className='nav-close-button' onClick={() => this.setState({ isDockVisible: !this.state.isDockVisible })}><i className="material-icons">close</i></div></div>
            <ul>
              <li className={!category ? 'active-category' : 'category'}><Link to='/'>Home</Link></li>
              <li className={category && (category === 'performances') ? 'active-category' : 'category'}><Link to='/performances'>Performances</Link></li>
              <li className={category && (category === 'radio-plays-and-sound-art') ? 'active-category' : 'category'}><Link to='/radio-plays-and-sound-art'>Radio Plays and Sound Art</Link></li>
              <li className={category && (category === 'artistic-research-projects') ? 'active-category' : 'category'}><Link to='/artistic-research-projects'>Artistic Research Projects</Link></li>
              <li className={category && (category === 'critical-writings') ? 'active-category' : 'category'}><Link to='/critical-writings'>Critical Writings</Link></li>
              <li className={category && (category === 'current-projects') ? 'active-category' : 'category'}><Link to='/current-projects'>Current Projects</Link></li>
            </ul>        
          </Dock>   
        </nav>  
      </div>
    )
  }
}