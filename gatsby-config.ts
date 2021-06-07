module.exports = {
    siteMetadata: {
        title: "Partio-Ohjelma",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        'gatsby-plugin-postcss',
        `gatsby-plugin-typescript`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.API_URL,
                contentTypes: ['Page'],
            }
        },
        'gatsby-plugin-graphql-codegen'
    ],
};
