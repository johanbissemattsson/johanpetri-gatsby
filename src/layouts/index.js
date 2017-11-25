import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header>
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
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Johan Petri'
      meta={[
        { name: 'description', content: 'Director, Dramaturgue and Artistic Researcher' },
        { name: 'keywords', content: 'theater, music, performances, sound art, radio plays, artistic research, critical writing' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
