import React from 'react';

export default class AddOption extends React.Component {
    state = { // eslint-disable-line
        error: undefined,
    };

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const { handleAddOption } = this.props;
        const error = handleAddOption(option);

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
