import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    Modal.setAppElement('#app');
    const { selectedOption, handleClearSelectedOption } = props;
    return (
        <Modal
            isOpen={!!selectedOption}
            onRequestClose={handleClearSelectedOption}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {selectedOption && <p>{selectedOption}</p>}
            <button
                type="button"
                onClick={handleClearSelectedOption}
            >
                Okay
            </button>
        </Modal>
    );
};

export default OptionModal;