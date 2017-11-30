import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import WebFont from 'webfontloader';

import 'normalize.css';
import './index.css'

export default class TemplateWrapper extends Component {
  componentWillMount() {
    WebFont.load({
      google: {
        families: ['Spectral', 'Source Code Pro', 'Source Sans Pro']
      }
    })
  }
  
  render() {
    const children = this.props.children;

    return (
      <div className='site-container'>
        <Helmet
          title='Johan Petri'
        />
          {children()}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

