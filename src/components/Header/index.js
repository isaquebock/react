import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import Title from "../Title";

import { ThemeContext } from '../../context/ThemeContext';

function Header({ title, children }) {

    const { onToggleTheme } = useContext(ThemeContext)

    return (
        <div>        
            <Title>{ title }</Title>
            { children }

            <button onClick={onToggleTheme}>Mudar tema</button>

            <hr />
        </div>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

Header.defaultProps = {
    title: 'Blog do Isaque'
}