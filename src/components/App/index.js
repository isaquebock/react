import React, { useState, createContext } from 'react';
import Header from '../Header';

import Post from '../Post';

import { ThemeProvider  } from '../../context/ThemeContext';

import { Title } from './styles';

export default function App() {

    // Hooks

    const [ posts, setPosts ] = useState([
        { id: 1, title: 'Title#01', subtitle: 'Subtitle#01', likes: 20, read: false, removed: false },
        { id: 2, title: 'Title#02', subtitle: 'Subtitle#02', likes: 21, read: false, removed: false },
        { id: 3, title: 'Title#03', subtitle: 'Subtitle#03', likes: 24, read: false, removed: false },
    ])

    // Functions

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
        setPosts((prevState) => prevState.map(
            post => post.id === postId ? {...post, removed: true} : post
        ))
    }

    return (
        <ThemeProvider>
            <Header>
                <Title >Posts da Semana</Title>

                <button onClick={handleRefresh}>Atualizar</button>    
            </Header>
            
            { posts.map(post => (
                <Post
                    key={post.id}
                    post={post} 
                    onRemove={handleRemovePost}
                    onRead={handleReadPost}
                />
            )) }
        </ThemeProvider>
    )
}
