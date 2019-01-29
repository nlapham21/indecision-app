
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        };
    }

    handleToggleVisibility() {
        this.setState(prevState => ({
            visibility: !prevState.visibility,
        }));
    }

    render() {
        const { visibility } = this.state;
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility} type="button">{visibility ? 'Hide details' : 'Show details'}</button>
                {visibility && (
                    <div>
                        <p>These are some secret details bro!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
