# Variables, functions and folders naming
Folders should be named using [dash-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles):
```javascript
// Good
.
├── src
│   └── components
│       └── buttons
|       |    └── Button.jsx
│       └── menu-dropdown
|           └── MenuDropdown.jsx

// Bad
// camelcase or snake_case
.
├── src
│   └── Components
│       └── Buttons
|       |    └── Button.jsx
│       └── sidebarItems
|       |   └── Dropdown.jsx
|       └── menu_items
|           └── MenuButton.jsx
```

Classes and constructor functions should be `TitleCased`

```javascript
// Good
class MyClass { }

let MyComponent = function() { }

// Bad
class badClassName { }
```

Constant values truly represent "data" that is constant (e.g. is not expected to be mutated during
the app lifecycle), should be in `ALL_CAPS`. Global
functions would still be `camelCased`.

```javascript
// Good:
export const TOP_ELEMENT_NAME = 'div';

const API_CALLBACKS = {
    pending: sendPendingResponse,
    completed: sendCompletedResponse
}

// Bad: constant data should be ALL_CAPS
export const defaultName = 'Item';

class DatePicker {
    render() {
        // Bad: constant is within a method and should be camelCased
        const DEFAULT_VALUE = 0;
    }
}
```

All other symbols (constants within a method, methods and variables) should be `camelCased`!

```javascript
// Bad: functions aren't "class" or a "data" and so shouldn't be TitleCase
export const Pizza = makeRecipe('pizza');

// Good: exporting a function with camelCase name
export const pizza = makeRecipe('pizza');


// Bad: `const` outside of a method should be ALL_CAPS
const topElement = 'span'

// Bad - Not a constructor function and so should be camelCase
const addBufalaMozzarella = () => { console.log('Adding delicious mozzarella') }

// Good - local constants within class or function
class MyClass {
    const componentName = 'DatePicker'
    render() {
        const button = <Component name={name} />
    }
}
```

# Base Language

## Always use curly brackets with control statements
```javascript
//Bad
if (x > 0)
    return Math.round(x);
else
    return Math.sqrt(x);

for (let recpie of recipeBook)
    console.log(item)

//Good
if (x > 0) {
    return Math.round(x);
} else {
    return Math.sqrt(x);
}

for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
}

```

## Avoid 'Yoda' conditions
Avoid Yoda conditions is better in terms of readability.
So variable on the left and the constant on the right.

```javascript
// Bad
if (0 < x && 'active' !== flag) {
    fn(something)
}

// Good
if (x > 0 && flag !== 'active') {
    fn(something)
}
```

## Prefer dot notation

When the property name is an identifier-legal string it's clearer to use dot notation instead of bracket notation.

```javascript
// Bad
let name = item['name'];

// Good
let name = item.name;
let dashedProp = item['dashed-prop'];
```

## Use ES6 `import` rather than `require`

ES6 provides a module syntax that we can use rather than a `require` function. Babel's implementation of the ES6 module loader uses CommonJS under the hood, so we can `import` external CommonJS modules with no problem.

```javascript
// Bad
const spaghetti = require('recipes');

// Good
import {Spaghetti} from 'recipes';

```

## Use ES6 `export` rather than CommonJS exports

```javascript
// Bad
const Label = () => {...}
const Button = () => {...}

module.exports = {
    Label,
    Button
}

// Good
export const Label = () => {...}
export const Button = () => {...}
```

## Prefer named import/export
To use an exported item in the most consistent way across all application is better using named import/export

```javascript
// Bad
const Label = () => {...}
export default Label;

import MyLabel from 'pizza-oven';

// Good
const Label = () => {...}
export {Label};

import {Label} from 'pizza-oven';
```

This is not useful when we have components with name collisions. In this case it desiderable using default import/export
```javascript
const Label = () => {...}
export default Label;

import {Label} from 'the-best-library-ever';
import MySuperLabel from 'pizza-oven';
```

## Prefer template strings to string concatenation

With an ES6 template string concatening some strings is clearer

```javascript
// Bad
return 'Total pizzas ' + totalPizzas + ' in the table at ' + now + '.';

// Good

return `Total pizza ${totalPizzas} in the table at ${now}.`;
```


# Arrow Functions

## Prefer use parentheses in arrow function definitions

This makes the syntax consistent between single-argument arrow functions and multiple-argument (and zero-argument!) arrow functions.

```javascript
// Bad
collection.map(item => { return item - 1; })

// Good
collection.map((item) => { return item -1; })
```


## Space out the arrow function operator
```javascript
// Bad
(item)=>{ console.log(item) }

// Good
(item) => { console.log(item) }
```

## Prefer arrow functions for callbacks

If the callback does not rely on its own `this` value but to one from the enclosing scope, it should be an arrow function.

```javascript
// Bad
return fetch('https://www.example.com')
    .then(function(res) {
        return res.json()
    })

// Good
return fetch('https://www.example.com')
    .then((res) => {
        return res.json()
    })

// Also good
return fetch('https://www.example.com')
    .then((res) => res.json())
```

# Variable Declarations

## Prefer `let` and `const` to `var`

```javascript
// Bad
var bucket = [];
var bucket;
var ATTEMPTS_COUNT = 5;

// Good
let bucket = [];
let bucket;
const ATTEMPTS_COUNT = 5;
```

Make sure to declare values that are not to be modified as `const`.

## Declare variables individually

More readable. Prevent unexpected results when commenting out lines.

```javascript
// Bad
let a = 1,
    b = 2,
    c = 3;

// Good
let a = 1;
let b = 2;
let c = 3;
```

## Prefer rest parameters to `arguments`

ES6 provides rest parameter syntax as a Python-like method for collecting unbound function arguments into an array.

```javascript
// Bad
// Notice that the `arguments` object has no `forEach` method
const logCat = () => {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
// Good
// values is an Array so it has all the array methods
const logCat = (...values) => {
	values.forEach((value) => console.log(value));
}


// Bad
// Any bound arguments remain in the `arguments` object
const superLogCat = (arg1) => {
	let values = Array.prototype.slice.call(arguments, 1);
	values.forEach((value) => console.log(`${arg1}: ${value}`); 
}

// Good
const superLogCat = (arg1, ...values) => {
	values.forEach((value) => console.log(`${arg1}: ${value}`);
}
```

## Prefer spread operators to `Function.apply`

```javascript
// Bad
console.log.apply(console, items)

// Good
console.log(...items)
```

## Do not nest ternary operators

```javascript
// Bad
let options = item
	? item.optionValue
	: (defaultOption
		? defaultOption.value
		: defaultOptionValue
	);

// Good
let option;
if (item) {
	option = item.optionValue
} else if (defaultOption) {
	option = defaultOption.value
} else {
	option = defaultOptionValue
}
```
