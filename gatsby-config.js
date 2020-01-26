module.exports = {
  siteMetadata: {
    title: 'Adrián Mato',
    titleDefault: 'Adrián Mato — Product Designer in San Francisco',
    description: 'Designing and building tools for developers at GitHub.',
    author: 'adrianmg',
    email: 'hello@adrianmato.com',
    social: 'adrianmg',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-emotion`,
    // TODO: see if we need this for lazy loading images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
