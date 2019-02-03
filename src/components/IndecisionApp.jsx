import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };

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

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: [],
        }));
    }

    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optionToRemove),
        }));
    }

    handlePick = () => {
        const { options } = this.state;
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption = (option) => {
        const { options } = this.state;
        if (!option) {
            return 'Enter valid value to add item';
        }
        if (options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({
            options: prevState.options.concat(option),
        }));
        return '';
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';
        const { options, selectedOption } = this.state;
        return (
            <div>
                <Header
                    subTitle={subTitle}
                />
                <div className="container">
                    <Action
                        hasOptions={options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;
