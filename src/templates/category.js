import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet'

class Category extends Component {
  render() {
    const site = this.props.data.site;
    const page = this.props.data.page;
    const { title, body, pages } = page;
    return (
      <div>
        <Helmet title={`${page.title} | ${site.siteMetadata.title}`} />
        <h1>{title}</h1>
        {body &&
          <div dangerouslySetInnerHTML={{__html: body.content.html}} />
        }
        {pages &&
          <ul>
            {pages.map(( node, i) => {
              return (
                <li key={node.id}>
                  <Link to={page.slug + '/' + node.slug}>
                    <h3>{node.title}</h3>
                    {node.description && 
                      <div dangerouslySetInnerHTML={{__html: node.description.content.html}} />
                    }
                  </Link>
                </li>
              )
            })}
          </ul>
        }
        <Link to="/">Go back to the homepage</Link>
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
         }
       }
    }
  }
`