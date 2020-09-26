require('dotenv').config()//Plugins de configurações do gatsby

const queries = require('./src/utils/algolia_queries')

module.exports = {
    siteMetadata: {
        title: `Rene Sena`,
        position: `Front-end Developer`,
        description: `"Um aventureiro no mundo da tecnologia"`,
        author: `Rene Sena`,
        siteUrl: `https://www.renesena.com.br`,
        icon: `/src/images/favicon.webp`
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        //Para esse plugin funcionar, ele tem que ser o primeiro a ser lido
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins:[
                    {
                        /*Importante salientar que as imagens não vão estar dentro da mesma pasta 
                            que a dos post's, será útil quando for integrar com o CMS*/
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }, 
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false,
                        },
                    },
                    
                    `gatsby-remark-lazy-load`, 
                    `gatsby-remark-prismjs`,    
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-algolia-search`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
              queries,
              chunkSize: 10000, // default: 1000
              enablePartialUpdates: true, // default: false
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Rene`,
                short_name: `Rene Sena`,
                start_url: `/`,
                background_color: `#121212`,
                theme_color: `#121212`,
                display: `minimal-ui`,
                icon: `src/images/favicon.webp`
                // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                    `Roboto`,
                    `Poppins`,
                    `source sans pro\:300,400,600,700`,
              ],
            }
        },
        `gatsby-plugin-sitemap`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify-cms`,
    ],
}
