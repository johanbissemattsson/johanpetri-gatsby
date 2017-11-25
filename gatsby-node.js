const path = require(`path`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('src/templates/category.js');
    resolve(
      graphql(
      `
        {
          allContentfulCategory {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create static pages for category pages
        result.data.allContentfulCategory.edges.forEach(({ node }) => {
          const path = node.slug;
          createPage({
            path,
            component: categoryTemplate,
            // If you have a layout component at src/layouts/blog-layout.js
            //layout: `blog-layout`,
            context: {
              path
            }
          })
        })
      })
    )
  })
}
    
/*
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulCategory {
              edges {
                node {
                  id
                  slug
                  category {
                    id
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create Page pages
        const categoryTemplate = path.resolve(`./src/templates/category.js`)
        // We want to create a detailed page for each
        // page node;
        
        result.data.allContentfulCategory.edges.forEach(({ node }) => {
          const slug = node.slug;
          console.log(slug)       
          createPage({
            path: path,
            component: categoryTemplate,
            context: {
              slug: path,
            }              
          })
        })
      })
    )
  })
}*/