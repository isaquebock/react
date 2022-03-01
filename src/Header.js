import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Header({ title, children, onToggleTheme }) {
    return (
        <Fragment>        
            <h1>{ title }</h1>
                { children }

            <button onClick={onToggleTheme}>Mudar tema</button>

            <hr />
        </Fragment>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    onToggleTheme: PropTypes.func.isRequired
}

Header.defaultProps = {
    title: 'Blog do Isaque'
}