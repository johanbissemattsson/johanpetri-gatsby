import React, { Component } from 'react';
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer className='site-footer'>
        <div className='site-info-container'>
          <div className='site-info'>
            <div className='about'>
              <h3>Johan Petri</h3>
              <p>Theater Director, Dramatist, Dramaturge, Composer and Artistic Researcher</p>
              <Link to='cv'>&mdash; View curriculum vitae</Link>
            </div>
            <div className='contact'>
              <h3>Contact</h3>
              <address>
                Johan Petri<br />
                Åsögatan 129<br />
                11624 STOCKHOLM<br /><br />
                <a href="mailto:johankgpetri@gmail.com">johankgpetri@gmail.com</a>
                <a href="tel:+46708880479">+46 (0)70-888-04-79</a>
              </address>
            </div>
            <div className='links'>
              <h3>Links</h3>
              <a href='http://www.alicekollektiv.nu/'>www.alicekollektiv.nu</a>
              <a href='http://www.alice-musik.se'>www.alice-musik.se</a>
            </div>
          </div>
        </div>
        <div className='site-credits-container'>
          <div className='site-credits'>
            <div className='bisse'>
              Website by <a href='https://www.johanbissemattsson.se'>Johan Bisse Mattsson</a>
            </div>
            <div className='contentful-wordmark'>
              <a href='https://www.contentful.com/' rel='nofollow' target='_blank'><img src='https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg' alt='Powered by Contentful' style={{maxWidth:'100px', width:'100%'}}/></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}