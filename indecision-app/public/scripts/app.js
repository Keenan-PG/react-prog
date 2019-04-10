console.log('App is running');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>;
// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

// JSX - JavaScript XML (babel'd)
var template = React.createElement(
    "p", 
    null, 
    "This is JSX from app.js"
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);