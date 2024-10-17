import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <h4>{post.title}</h4>
            <p>Author: {post.author}</p>
            <p>Description: {post.selftext}</p>
            <p>Upvotes: {post.ups}</p>
        </div>
    );
};

export default Post;
