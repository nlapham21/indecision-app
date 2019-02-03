import React from 'react';

const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{title}</h1>
                {subTitle && <h2 className="header__subtitle">{subTitle}</h2>}
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision',
};

export default Header;
