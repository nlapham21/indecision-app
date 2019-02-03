import React from 'react';

const Action = (props) => {
    const { hasOptions, handlePick } = props;
    return (
        <div>
            <button
                className="big-button"
                type="button"
                onClick={handlePick}
                disabled={!hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};

export default Action;
