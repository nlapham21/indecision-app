import React from 'react';
import Option from './Option';

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

export default Options;
