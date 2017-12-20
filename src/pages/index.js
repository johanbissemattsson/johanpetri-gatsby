import React, { Component } from 'react';
import Link from 'gatsby-link';
import { canUseDOM } from 'exenv';

import Header from '../components/Header';
import Footer from '../components/Footer';

if (canUseDOM) {
  require('lazysizes');
  require('lazysizes/plugins/respimg/ls.respimg.js');  
}

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

  render() {
    const home = this.props.data.home.edges[0].node;
    const { introTitle, introText, backgroundImage, imageForPerformances, imageForRadioPlaysAndSoundArt, imageForArtisticResearchProjects, imageForCriticalWritings, imageForCurrentProjects } = home;

    return (
      <div className='site'>
        <Header />
          <div className='home'>
            <div className='home-splash'>
              <div className='intro-container'>
                <div className='intro'>
                  <h2 className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>{introTitle}</h2>
                  <p className={!this.state.initIntro ? 'uninitialized' : 'initialized'}>{introText}</p>
                </div>
                <div className='background-image-container'>
                  <div className={'background-image ' + (!this.state.backgroundLoaded ? 'background-not-loaded' : 'background-loaded')}>
                    <img src={backgroundImage.file.url} alt='Background' onLoad={() => this.setState({backgroundLoaded: true})} width={backgroundImage.file.details.width} height={backgroundImage.file.details.height}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='home-nav'>
              <div className='nav-container'>
                <nav>
                  <ul>
                    <li className='home-nav-item'>
                      <Link to='/performances' className='home-nav-link'>
                        <img className='home-nav-image lazyload' src={imageForPerformances.file.url} srcSet={imageForPerformances.lqip.base64} data-srcSet={imageForPerformances.file.url + ' 1x'} width={imageForPerformances.file.details.width} height={imageForPerformances.file.details.height} alt='Performances' data-sizes='auto'/>
                        <div className='home-nav-title'>Performances</div>
                      </Link>
                    </li>
                    <li className='home-nav-item'>
                      <Link to='/radio-plays-and-sound-art' className='home-nav-link'>
                        <img className='home-nav-image lazyload' src={imageForRadioPlaysAndSoundArt.file.url} srcSet={imageForRadioPlaysAndSoundArt.lqip.base64} data-srcSet={imageForRadioPlaysAndSoundArt.file.url + ' 1x'} width={imageForRadioPlaysAndSoundArt.file.details.width} height={imageForRadioPlaysAndSoundArt.file.details.height} alt='Radio Plays and Sound Art' data-sizes='auto'/>
                        <div className='home-nav-title'>Radio Plays and Sound Art</div>
                      </Link>
                    </li>
                    <li className='home-nav-item'>
                      <Link to='/artistic-research-projects' className='home-nav-link'>
                        <img className='home-nav-image lazyload' src={imageForArtisticResearchProjects.file.url} srcSet={imageForArtisticResearchProjects.lqip.base64} data-srcSet={imageForArtisticResearchProjects.file.url + ' 1x'} width={imageForArtisticResearchProjects.file.details.width} height={imageForArtisticResearchProjects.file.details.height} alt='Artistic Research Projects' data-sizes='auto'/>
                        <div className='home-nav-title'>Artistic Research Projects</div>
                      </Link>
                    </li>
                    <li className='home-nav-item'>
                      <Link to='/critical-writings' className='home-nav-link'>
                        <img className='home-nav-image lazyload' src={imageForCriticalWritings.file.url} srcSet={imageForCriticalWritings.lqip.base64} data-srcSet={imageForCriticalWritings.file.url + ' 1x'} width={imageForCriticalWritings.file.details.width} height={imageForCriticalWritings.file.details.height} alt='Critical Writings' data-sizes='auto'/>
                        <div className='home-nav-title'>Critical Writings</div>
                      </Link>
                    </li>
                    <li className='home-nav-item'>
                      <Link to='/current-projects' className='home-nav-link'>
                        <img className='home-nav-image lazyload' src={imageForCurrentProjects.file.url} srcSet={imageForCurrentProjects.lqip.base64} data-srcSet={imageForCurrentProjects.file.url + ' 1x'} width={imageForCurrentProjects.file.details.width} height={imageForCurrentProjects.file.details.height} alt='Current Projects' data-sizes='auto'/>
                        <div className='home-nav-title'>Current Projects</div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }

}

export const indexQuery = graphql`
  query IndexQuery {
    home: allContentfulStart(filter: { slug: { eq: "index" } }) {
      edges {
        node {
          id
          slug
          introTitle
          introText
          backgroundImage {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }
          imageForPerformances {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }
          imageForRadioPlaysAndSoundArt {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }
          imageForArtisticResearchProjects {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }
          imageForCriticalWritings {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }
          imageForCurrentProjects {
            id
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
            lqip: resolutions {
              base64
            } 
          }               
        }
      }
    }
  }
`