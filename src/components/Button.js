import React, { useContext } from "react"
import PropTypes from "prop-types"

import { ThemeContext } from '../context/ThemeContext'

export default function Button(props) {

    const { theme } = useContext(ThemeContext);

    return (
        <button 
        onClick={props.onClick}
        style={{
            background: theme === 'dark' ? 'darkgray' : 'white',
            color: theme === 'dark' ? 'white' : 'darkgray',
            border: 'none',
            padding: '1rem',
            margin: '1rem 0',
            cursor: 'pointer'
        }}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}