const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Trust in the web',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button type="button" onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button type="button" onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options && app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot); // eslint-disable-line no-undef
};

render();
