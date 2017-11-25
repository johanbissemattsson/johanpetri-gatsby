import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header';
import Footer from '../components/Footer';

import 'normalize.css';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Johan Petri'
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
