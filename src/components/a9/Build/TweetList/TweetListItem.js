import React, {useState} from "react";
import './tweet.css';
import {useDispatch} from "react-redux";
import TweetStats from "./TweetStats";
import service from "./service";
import {deleteTweet} from "../../../../services/twitterService";

const TweetListItem = ({tweet, setTweets, tweets}) => {
    const dispatch = useDispatch();

    const deleteTweetClickHandler = (tweet) => {
        service.deleteTweet(tweet._id)
            .then(() => setTweets(
                tweets.filter(t => t !== tweet)));
    }

    const likeClickHandler = () => {
        //dispatch({type: 'like-tweet', tweet});
        //likeTweet(dispatch, tweet);
        setTweets(tweets.map(t =>
            {
                if(t._id === tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return t;
                }
            }
        ))
        console.log(tweet);
        service.likeTweet(tweet);
    };


    return(
        <li className="list-group-item wd-tweet-list">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']} alt={"logo"}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={() => deleteTweetClickHandler(tweet)} className="fas fa-times fa-pull-right" style={{color:"white"}}/>
                        <span className="fw-bold wd-username">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"/>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>
                        <div className="wd-tweet-para">
                            {tweet.tweet}
                        </div>
                        {
                            tweet.attachments && tweet.attachments.image &&
                            <img src={tweet.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tweet.attachments && tweet.attachments.video &&
                            <iframe width="100%" height="350px"
                            className="mt-2 wd-border-radius-20px"
                            style={{width: "100%"}}
                            src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                        }
                        {/*{JSON.stringify(tweet)}*/}
                    </td>
                </tr>
            </table>
            <div className="row wd-second-div">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"/>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span className="wd-stats"><i className="far fa-comment"/></span> <span className="wd-stats">{tweet.stats.comments}</span>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span className="wd-stats"><i className="fas fa-retweet"/></span> <span className="wd-stats">{tweet.stats.retweets}</span>
                </div>

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

                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <span className="wd-stats"><i className="fas fa-upload"/></span>
                </div>
            </div>
        </li>
    );
};
// <TweetStats tweet={tweet} setTweets={setTweets} tweets={tweets}/>
// <TweetStats tweet={tweet}/>
export default TweetListItem;