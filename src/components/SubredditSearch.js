import React, { useState } from 'react';

const SubredditSearch = ({ onAddLane }) => {
    const [subreddit, setSubreddit] = useState('');

    const handleAdd = () => {
        if (subreddit) {
            onAddLane(subreddit);
            setSubreddit('');
        }
    };

    return (
        <div className="subreddit-search">
            <input
                type="text"
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
                placeholder="Enter subreddit name"
            />
            <button onClick={handleAdd}>Add Lane</button>
        </div>
    );
};

export default SubredditSearch;
