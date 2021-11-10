import {useDispatch} from "react-redux";
import React, {useState} from "react";

const TweetStats = ({tweet, liked, setLiked}) => {
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        setLiked(!liked);
        dispatch({type: 'like-tweet', tweet});

    };
    return (

        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
             onClick={likeClickHandler}>
            {
                liked && <i className="fas fa-heart me-2" style={{color: liked ? "red" : "white"}}/>
            }
            {
                !liked && <i className="far fa-heart me-2" style={{color:"white"}}/>
            }
            <span style={{color:"white"}}> {tweet.stats.likes}</span>
        </div>
        );


}
export default TweetStats;