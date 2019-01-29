import React from 'react';

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

export default Header;
