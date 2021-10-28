import PostItem from "./PostItem";
import posts from "./posts.json";

const PostList = () => {
    return (
        <ul className="list-group">
            {posts.map(thePost => {
                return (<PostItem post={thePost}/>);
            })
            }
        </ul>
    )
}

export default PostList;
