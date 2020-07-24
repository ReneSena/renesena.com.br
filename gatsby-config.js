require('dotenv').config()//Plugins de configurações do gatsby

const queries = require('./src/utils/algolia_queries')

module.exports = {
    siteMetadata: {
        title: `Rene Sena`,
        position: `Front-end Developer`,
        description: `Um aventureiro no mundo da tecnologia 🏄`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
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
              appId: process.env.ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
              queries,
              chunkSize: 10000, // default: 1000
              enablePartialUpdates: true, // default: false
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
