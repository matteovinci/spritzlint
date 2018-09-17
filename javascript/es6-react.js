module.exports = {
    // Just a util wrapper file which includes both configuration for es6 and react
    extends: [
        './es6/es6.js',
        './react/react.js'
    ],
    rules: {
        'no-unused-vars': ['error', {varsIgnorePattern: 'rest'}], // ignore variable names like 'rest' (useful when destructuring props)
    }
};
