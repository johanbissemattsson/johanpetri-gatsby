import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet'

class Page extends Component {
  render() {
    const site = this.props.data.site;    
    const page = this.props.data.page;
    const { title, body, pages } = page;
    return (
      <div className='content'>
        <article>      
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
                    <Link to={node.slug}>
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
        </article>
      </div>
    )
  }
}

export default Page;

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }    
    page: contentfulPage(slug: {eq: $slug}) {
      id
      title
      body {
        content: childMarkdownRemark {
          html
        }
      }
    }
  }
`