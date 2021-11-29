import {useDispatch} from "react-redux";
import React, {useState} from "react";
//import {likeTweet} from "../../../../services/twitterService";
import service from './service'

const TweetStats = ({tweet, setTweets, tweets}) => {
    const dispatch = useDispatch();


    const likeClickHandler = (tweet) => {
        //dispatch({type: 'like-tweet', tweet});
        //likeTweet(dispatch, tweet);
        service.likeTweet(tweet._id).then((newTweet) => setTweets(tweets.map(t =>
            {
                if(t._id === newTweet._id) {
                    if(t.liked === true) {
                        t.liked = false;
                        t.stats.likes--;
                    } else {
                        t.liked = true;
                        t.stats.likes++;
                    }
                    return t;
                } else {
                    return t;
                }
            }
        )))
    };

    return (

        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
             onClick={() => likeClickHandler(tweet)}>
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