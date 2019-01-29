
class IndecisionApp extends React.Component { // eslint-disable-line
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }

    // Lifecycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { options } = this.state;
        if (prevState.options.length !== options.length) {
            const json = JSON.stringify(options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: [],
        }));
    }

    handleDeleteOptionSingular(optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optionToRemove),
        }));
    }

    handlePick() {
        const { options } = this.state;
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({
            options: prevState.options.concat(option),
        }));
        return '';
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';
        const { options } = this.state;
        return (
            <div>
                <Header
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// stateless functional component
const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision',
};

const Action = (props) => {
    const { hasOptions, handlePick } = props;
    return (
        <div>
            <button
                type="button"
                onClick={handlePick}
                disabled={!hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    const { options, handleDeleteOptions, handleDeleteOptionSingular } = props;
    return (
        <div>
            <button type="button" onClick={handleDeleteOptions}>Remove All</button>
            {options.length === 0 && <p>Please add an option to get started</p>}
            {
                options && options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOptionSingular={handleDeleteOptionSingular}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    const { optionText, handleDeleteOptionSingular } = props;
    return (
        <div>
            Option: { optionText }
            <button
                type="button"
                onClick={(e) => {
                    handleDeleteOptionSingular(optionText);
                }}
            >
            Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component { // eslint-disable-line
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }

    handleAddOption(e) { // eslint-disable-line class-methods-use-this
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                {error && <p>{error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = props => (
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); // eslint-disable-line
