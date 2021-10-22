module.exports = {
    siteMetadata: {
        title: '<Whitelabel>',
        titleTemplate: '%s · <Whitelabel>',
        description: 'A portfolio work by Edinburgh based, product designer Andrew Cetnarskyj.',
        siteUrl: 'https://andrewcetnarskyj.co.uk', // No trailing slash allowed!
        image: '/images/banner.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@justandydesign1',
        menuLinks:[
            {
                label:'home',
                url:'/'
            },
            {
                label:'About',
                url:'/about'
            }
        ],
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/justandydesign1',
            },
            {
                name: 'github',
                url: 'https://github.com/just-andy',
            },
            {
                name: 'instagram',
                url: 'https://github.com/just-andy',
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/andrewcetnarskyj/',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/favicon.png`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `banners`,
                path: `${__dirname}/src/images/`,
            },
        },
    ],
};
