# React

## If using ES6, use ES6 classes for stateful components

React works well with ES6 class syntax. For consistency, let's use this.

```javascript
// Bad
let MyComponent = React.createClass({
	componentDidMount() {
		this.props.getData()
	},
	render() {
		return <div>{this.props.label}</div>
	}
})

// 	Good

class MyComponent extends React.Component {
	componentDidMount() {
		this.props.getData()
	}

	render() {
		return <div>{this.props.label}</div>
	}
}
```

## Use plain functions for stateless components

React now allows stateless components to be implemented as pure functions rather than classes. This is cleaner and allows destructuring of props.

```javascript
// Bad
class MyComponent extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item) => <li>{item.content}</li>}
			</ul>
		)
	}
}

// Good
const MyComponent = ({items}) => {
	return (
		<ul>
			{items.map(({content}) => <li>{content}</li>}
		<ul>
	)
}

```

## Never mix together controlled and uncontrolled behaviors for a component
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
* A **Controlled Component** is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "*controls*" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
* A **Uncontrolled Component** is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

```javascript
class EventsWidget extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // BAD: there isn't a single source of truth here, component should use this.props.data coming from outside 
        // OR loading data internally
        if (typeof this.props.data === 'undefined') {
            this.fetchApi();
        } else {
            // BAD never mirror properties to state
            this.setState({
                data: this.props.data
            });
        }
    }
    
    fetchApi = () => {
        fetch('myurl').then((data) => {
            this.setState({
                data: response
            });
        });
    }
}
```

For more info see [Common Bugs When Using Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#common-bugs-when-using-derived-state)

## Use React strict mode in development
```javascript
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <React.StrictMode> // hightlights potential problems in the all the way down to the children chain
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}
```
https://reactjs.org/docs/strict-mode.html

# JSX

## Self-close component elements if possible

```javascript
// Bad
<MyComponent prop1="val1" prop2={name}></MyComponent>

// Good
<MyComponent prop1="val1" prop2={name} />
```
