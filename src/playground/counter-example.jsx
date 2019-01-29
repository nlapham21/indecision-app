
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }

    // Lifecycle methods
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!Number.isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { count } = this.state;
        if (prevState.count !== count) {
            localStorage.setItem('count', count);
        }
    }

    handleAddOne() {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }));
    }

    handleMinusOne() {
        this.setState(prevState => ({
            count: prevState.count - 1,
        }));
    }

    handleReset() {
        this.setState(() => ({
            count: 0,
        }));
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button type="button" onClick={this.handleAddOne}>+1</button>
                <button type="button" onClick={this.handleMinusOne}>-1</button>
                <button type="button" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count += 1;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count -= 1;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={(addOne)} type="button">+1</button>
//             <button onClick={(minusOne)} type="button">-1</button>
//             <button onClick={(reset)} type="button">Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot); // eslint-disable-line no-undef
// };

// renderCounterApp();
