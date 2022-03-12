import React, { useState, createContext } from 'react';

export const ThemeContext = createContext('dark')

export function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark')

    function handleToggleTheme() {
        setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{theme, onToggleTheme: handleToggleTheme}}>
            { props.children }
        </ThemeContext.Provider>
    )
}