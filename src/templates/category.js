import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { canUseDOM } from 'exenv';

import Header from '../components/Header';
import Footer from '../components/Footer';

if (canUseDOM) {
  require('lazysizes');
}

class Category extends Component {
  render() {
    const site = this.props.data.site;
    const page = this.props.data.page;
    const { title, body, pages } = page;
    return (
      <div className='site'>
        <Header category={page.slug} />
        <div className='content'>
          <article>
            <Helmet title={`${page.title} | ${site.siteMetadata.title}`} />
            <div className='main-content-container'>
              <h2 className='page-title'>{title}</h2>
              {body &&
                <div className='page-body' dangerouslySetInnerHTML={{__html: body.content.html}} />
              }
            </div>
            {pages &&
              <div className='projects'>
                <div className='projects-list-container'>
                  <ul className='projects-list'>
                    {pages.map(( node, i) => {
                      return (
                        <li className='project-item' key={node.id}>
                          <Link to={page.slug + '/' + node.slug}>
                            <h3>{node.title}</h3>
                            {node.featuredImage &&
                              <img className='project-featured-image' src={node.featuredImage.file.url} width={node.featuredImage.file.details.width} height={node.featuredImage.file.details.height} alt={node.title} />
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
            }
          </article>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Category;

export const categoryQuery = graphql`
  query CategoryQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    page: contentfulCategory(slug: {eq: $slug}) {
      id
      title
      slug
      body {
        content: childMarkdownRemark {
          html
        }
       }
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