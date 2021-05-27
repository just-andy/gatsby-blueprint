module.exports = {
    siteMetadata: {
        title: 'Andy Cetnarskyj Portfolio',
        titleTemplate: '%s · Just Andy Portfolio',
        description: 'A portfolio work by Edinburgh based, product designer Andrew Cetnarskyj.',
        siteUrl: 'http://just-andy.uk', // No trailing slash allowed!
        image: '/images/banner.jpg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@justandydesign1',
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
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
            __key: `images`,
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
            __key: `pages`,
        },
    ],
};
