"use strict";

var app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of tha machineee",
    options: ['one', 'two']

    // on submit event listener
};var onFormSubmit = function onFormSubmit(e) {
    // 
    e.preventDefault();
    console.log('form submitted');

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};

var appTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        "p",
        null,
        app.options.length
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        ),
        React.createElement(
            "li",
            null,
            "Item 3.3"
        )
    ),
    React.createElement(
        "form",
        { onSubmit: onFormSubmit },
        React.createElement("input", { tyle: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add option"
        )
    )
);

// 
// rendering
//

var appRoot = document.getElementById('app');
ReactDOM.render(appTemplate, appRoot);
