import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";

export default function Post(props) {
    
    if(props.post.read) {
        return <h2>{ props.post.title } já foi lido </h2>
    }

    return (
        <>
            <PostHeader
                post={props.post}
                onRemove={props.onRemove}
                onRead={props.onRead}
            />
            
            <article>
                <br />
                <small>{props.post.subtitle}</small>
            </article>

            Likes: { props.post.likes / 2 }

            <br />
            <br />
        </>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired
}