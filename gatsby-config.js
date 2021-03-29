module.exports = {
  siteMetadata: {
    title: 'React Guide With Zanaty Workshop',
    subtitle: '👨🏻‍💻 Mohammed Elzanaty',
    description: 'This is the description that will show up when people share as well as on search engines',
    keywords: ['udacity', 'mohammed elzanaty', 'frontend', 'react']
  },
  //pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: 'markdown-pages'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-buttons`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
}
