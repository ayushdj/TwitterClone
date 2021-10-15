import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

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