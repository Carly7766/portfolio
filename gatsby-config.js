/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');
const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
);

module.exports = {
    /* Your site config here */
    flags: {
        PARALLEL_SOURCING: false,
        LMDB_STORE: false,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: [
                    'node_modules',
                    'bower_components',
                    '.cache',
                    'public',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true,
            },
        },
    ],
};
