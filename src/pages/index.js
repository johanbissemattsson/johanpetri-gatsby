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
      initBackground: false
    }
  }

  componentDidMount() {
    this.setState({initIntro: true});
  }

  componentWillUnmount() {
    this.setState({initIntro: false});
  }

  render() {
    return (
      <div className='site'>
        <Header />
          <div className='home'>
            <div className='intro-container'>
              <div className='intro'>
                <h2 className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>Theater, music and various offshoots</h2>
                <p className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>Creative and theoretical explorations</p>
              </div>
            </div>
            <div className='background-image-container'>
              <div className='background-image' style={{backgroundImage: 'url('+ backgroundImage + ')'}}/>
            </div>
          </div>
        <Footer />
      </div>
    )
  }

}