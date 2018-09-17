# Spritz Lint

This is a convenient set of eslint rules to format your code following the most used conventions. This module provides rules for ECMAScript 6 code and React.  

## Installation

`npm install spritzlint --save-dev`

**IMPORTANT: Make you have the correct version of babel-eslint and eslint installed**

Check the correct version of `babel-eslint` to install [https://github.com/babel/babel-eslint](https://github.com/babel/babel-eslint)

## Usage with Webpack
Install [eslint-loader](https://github.com/webpack-contrib/eslint-loader) if not already installed.
Extend your rule for the file type you want to lint in the following way:

```javascript
/// rules
[
...
    {
        test: /\.(js|jsx)$/,
        exclude: [
            path.resolve('node_modules')
        ],
        use: ['babel-loader',
            {
                loader: 'eslint-loader',
                options: {
                    configFile: './node_modules/spritzlint/javascript/es6-react.js',
                    failOnWarning: false,
                    failOnError: true,
                    fix: true
                }
            }
        ]
    }
];

```

## Usage in .eslintconfig file
You can also extend directly your `.eslintconfig` file:
```json
{
    ...
    "extends": "./node_modules/spritzlint/javascript/es6-react.js"
    ...
}
```

## Install required extra npm modules

Install extra npm modules (if needed) as defined in the README file of each language configuration file folder 

e.g. for `javascript/es6/react/react.js` you will need `eslint-plugin-react` npm module.
