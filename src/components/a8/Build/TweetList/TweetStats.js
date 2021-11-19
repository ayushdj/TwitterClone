import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {likeTweet} from "../../../../services/twitterService";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();


    const likeClickHandler = () => {
        //dispatch({type: 'like-tweet', tweet});
        likeTweet(dispatch, tweet);
    };

    return (

        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
             onClick={likeClickHandler}>
            {
                tweet.liked && <i className="fas fa-heart me-2" style={{color: tweet.liked ? "red" : "white"}}/>
            }
            {
                !tweet.liked && <i className="far fa-heart me-2" style={{color:"white"}}/>
            }
            <span style={{color:"white"}}> {tweet.stats.likes}</span>
        </div>
        );


}
export default TweetStats;