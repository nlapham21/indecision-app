import React from 'react';

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

export default Option;
