import React from 'react'
import PostSummaryItem from './PostSummaryItem';
import posts from './posts.json';

// For each item post in posts, you are returning a PostSummaryItem render of that post.
const PostSummaryList = () => {
    return (
        <ul className="list-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 wd-middle-summary">
            {
                posts.map(post => {
                return <PostSummaryItem post={post}/>;
            })
            }
        </ul>
    );
}

export default PostSummaryList;