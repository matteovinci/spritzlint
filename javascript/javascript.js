module.exports = {
    env: {
        node: true,
        browser: true,
        amd: true,
        jquery: true,
        mocha: true
    },
    extends: [
        'eslint:recommended'
    ],
    // A wrapper around the Babel parser that makes it compatible with ESLint
    parser: 'babel-eslint'
};
