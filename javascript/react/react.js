module.exports = {
    extends: [
        'plugin:react/recommended'
    ],
    globals: {
        React: false
    },
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        }
    },
    plugins: ['react'],
    rules: {
        'react/display-name': ['error'],
        'react/jsx-sort-props': ['error'],
        'react/no-multi-comp': ['error'],
        'react/prop-types': ['error']
    }
};
