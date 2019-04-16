const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp(); 
};
const subOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="plusOne" className="button" onClick={addOne}>+1</button>
            <button id="subOne" className="button" onClick={subOne}>-1</button>
            <button id="reset" className="button" onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, appRoot); 
}

renderCounterApp();