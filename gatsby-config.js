module.exports = {
  siteMetadata: {
    title: 'Johan Petri',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
        options: {
          spaceId: 'auph8hki32us',
          accessToken: 'a5c229d621d3481be5c91b7a56b68c8a6628bf596255c2eefbf51e0a91624252',
        },
    },    
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ],
}
