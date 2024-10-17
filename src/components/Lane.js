import React from 'react';
import { useGetSubredditPostsQuery } from '../features/api/redditApi';
import Post from './Post';

const Lane = ({ subreddit, onRemove }) => {
    const { data, error, isLoading } = useGetSubredditPostsQuery(subreddit);

    return (
        <div className="lane">
            <div className="lane-header">
                <h3>r/{subreddit}</h3>
                <button className="remove-button" onClick={() => onRemove(subreddit)}>X</button>
            </div>
            {isLoading &&  <div className="loader"></div>}
            {error && <p>Error loading subreddit data.</p>}
            {data && data.data.children.map((post) => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </div>
    );
};

export default Lane;
