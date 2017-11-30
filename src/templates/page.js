import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { canUseDOM } from 'exenv';

import Header from '../components/Header';
import Footer from '../components/Footer';

if (canUseDOM) {
  require('lazysizes');
}

class Page extends Component {
  constructor() {
    super();
    this.state = {
      initImageSlider: false
    }
  }

  componentDidMount() {
    /* Workaround for initial react-slick positioning issue */
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      this.setState({initImageSlider: true})
    }, 0);
  }

  render() {
    const site = this.props.data.site;    
    const page = this.props.data.page;
    const category = this.props.data.category;
    const { title, body, images, credits } = page;
    const { pages} = category;    
    const sliderSettings = {
      dots: false,
      initialSlide: 0,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      variableWidth: true,
      lazyload: true,
      arrows: false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }]     
    };

    return (
      <div className='site'>
        <Header category={category.slug}  />
        <div className='content'>
          <article>      
            <Helmet title={`${page.title} | ${site.siteMetadata.title}`} />
            <div className='main-content-container'>
              <h2 className='page-title'>{title}</h2>
              {page.year &&
                <div className='page-year'>{page.year}</div>
              }
              {body &&
                <div className='page-body' dangerouslySetInnerHTML={{__html: body.content.html}} />
              }
            </div>
            {images &&
              <div className='image-slider-container' style={this.state.initImageSlider ? {opacity: 1} : {opacity: 0}}>
                <Slider {...sliderSettings}>
                  {images.map((image, index) => {
                    return (
                      <div className='project-image-container' key={index}>
                        <img className='project-image' src={image.file.url} srcSet={image.lqip.base64} data-srcSet={image.file.url + ' 1x'} width={image.file.details.image.width} height={image.file.details.image.height} alt={`Photo from ${page.title}`} className='lazyload' data-sizes='auto' />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            }
            {credits &&
              <div className='extra-content-container'>
                <div className='page-credits' dangerouslySetInnerHTML={{__html: credits.content.html}} />
              </div>
            }
          </article>
          {pages &&
            <div className='related-projects'>
              <h2 className='related-projects-title'>More {category.title}</h2>
              <div className='projects'>
                <div className='projects-list-container'>
                  <ul className='projects-list'>
                    {pages.map(( node, i) => {
                      return (
                        <li className='project-item' key={node.id}>
                          <Link to={category.slug + '/' + node.slug}  onClick={() => window.scrollTo(0,0)}>
                            <h3>{node.title}</h3>
                            {node.featuredImage &&
                              <img className='project-featured-image lazyload' src={node.featuredImage.file.url} srcSet={node.featuredImage.lqip.base64} data-srcSet={node.featuredImage.file.url + ' 1x'} width={node.featuredImage.file.details.width} height={node.featuredImage.file.details.height} alt={node.title} data-sizes='auto'/>
                            }
                            {node.description && 
                              <div className='project-description' dangerouslySetInnerHTML={{__html: node.description.content.html}} />
                            }
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($slug: String!, $category: String!) {
    site {
      siteMetadata {
        title
      }
    }    
    page: contentfulPage(slug: {eq: $slug}) {
      id
      title
      slug
      year
      body {
        content: childMarkdownRemark {
          html
        }
      }
      images {
        id
        file {
          url
          details {
            image {
              width
              height
            }
          }
          contentType
        }
        lqip: resolutions {
          base64
        }
      }
      credits {
        content: childMarkdownRemark {
          html
        }
      }
      category {
        id
        slug
      }
    }
    category: contentfulCategory(slug: {eq: $category}) {
      id
      title
      slug
      pages {
        id
        title
        slug
        description: childContentfulPageDescriptionTextNode {
          content: childMarkdownRemark {
            html
           }
         }
         featuredImage {
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
`