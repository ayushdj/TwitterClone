import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

// For each item post in posts, you are returning a PostSummaryItem render of that post.
const PostSummaryList = () => {
    return (`
        <ul class="list-group col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 wd-middle-summary">
            ${posts.map(post => {
                return PostSummaryItem(post);
            }).join('')
            }
        </ul>
    `)
}

export default PostSummaryList;