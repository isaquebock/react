import React, { useState, createContext } from 'react';
import Header from './Header';

import Post from './Post';

export const ThemeContext = createContext('dark')

export default function App() {

    // Hooks

    const [theme, setTheme] = useState('dark')

    const [ posts, setPosts ] = useState([
        { id: 1, title: 'Title#01', subtitle: 'Subtitle#01', likes: 20, read: false },
        { id: 2, title: 'Title#02', subtitle: 'Subtitle#02', likes: 21, read: false },
        { id: 3, title: 'Title#03', subtitle: 'Subtitle#03', likes: 24, read: false },
    ])

    // Functions

    function handleToggleTheme() {
        setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    function handleReadPost(postReaded) {
        setPosts(posts => posts.map(post => ({
            ...post,
            read: postReaded.id == post.id ? !post.read : post.read
        })))
    } 

    function handleRefresh() {
        const lastIndex = posts.length + 1

        setPosts((prevState) => [
            ...prevState,         
            {
                id: lastIndex,
                title: `Title#${lastIndex}`,
                subtitle: `Subtitle#${lastIndex}`,
                likes: 5
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ))
    }

    return (
        <ThemeContext.Provider value={theme}>
            <Header onToggleTheme={handleToggleTheme}>
                <h2>
                    Posts da Semana

                    <button onClick={handleRefresh}>Atualizar</button>    
                </h2>
            </Header>
            
            { posts.map(post => (
                <Post
                    key={post.title}
                    post={post} 
                    onRemove={handleRemovePost}
                    onRead={handleReadPost}
                />
            )) }
        </ThemeContext.Provider>
    )
}
