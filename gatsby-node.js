const path = require(`path`);

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: '/lazysizes/',
      loader: 'null-loader'
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('src/templates/category.js');
    const pageTemplate = path.resolve('src/templates/page.js');
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
          const slug = node.slug;
          const path = node.slug;
          createPage({
            path,
            component: categoryTemplate,
            // If you have a layout component at src/layouts/blog-layout.js
            //layout: `blog-layout`,
            context: {
              slug
            }
          })
        })
      }).then(() => {
        graphql(
          `
            {
              allContentfulPage {
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
          
          // Create static pages for normal pages
          result.data.allContentfulPage.edges.forEach(({ node }) => {
            const category = Array.isArray(node.category) ? node.category[0].slug : node.category.slug;           
            const slug = node.slug;
            const path = category + '/' + slug;
            createPage({
              path: path,
              component: pageTemplate,
              // If you have a layout component at src/layouts/blog-layout.js
              //layout: `blog-layout`,
              context: {
                slug,
                category
              }
            })
          })                   
        })  
      }) 
    )
  })
}