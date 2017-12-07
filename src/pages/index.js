import React, { Component } from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import Footer from '../components/Footer';

import backgroundImage from '../media/header-background.jpg';

export default class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      initIntro: false,
      initBackground: false,
      backgroundLoaded: false
    }
  }

  componentDidMount() {
    this.setState({initIntro: true});
  }

  componentWillUnmount() {
    this.setState({initIntro: false});
  }

  /*
    <h2 className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>Theater, music and various offshoots</h2>
    <p className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>Creative and theoretical explorations</p>
  */

  render() {
    return (
      <div className='site'>
        <Header />
          <div className='home'>
            <div className='intro-container'>
              <div className='intro'>
                <h2>Theater, music and various offshoots</h2>
                <p>Creative and theoretical explorations</p>
              </div>
              <div className='background-image-container'>
                <div className={'background-image ' + (!this.state.backgroundLoaded ? 'background-not-loaded' : 'background-loaded')}>
                  <img src={backgroundImage} alt='Background' onLoad={() => this.setState({backgroundLoaded: true})} width='1365' height='1838'/>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }

}