const app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of tha machineee",
    options: ['one', 'two']
}

// on submit event listener
const onFormSubmit= (e) => {
    // 
    e.preventDefault();
    console.log('form submitted');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
}

const appTemplate = (
    <div>
        <h1>{app.title}</h1>

        {app.subtitle && <p>{app.subtitle}</p>}

        <p>{app.options.length > 0 
            ? 'Here are your options' : 'No Options' }</p>       
            
        <p>{app.options.length}</p>

        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item 3.3</li>
        </ol>

        <form onSubmit={onFormSubmit}>
            <input tyle="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>  
);

// 
// rendering
//

const appRoot = document.getElementById('app');
ReactDOM.render(appTemplate, appRoot);