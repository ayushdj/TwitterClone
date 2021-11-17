import React, {useState} from "react";
import './tweet.css';
import {useDispatch} from "react-redux";
import TweetStats from "./TweetStats";
import {deleteTweet}
    from "../../../../services/twitterService";


const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);

    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, tweet);
    };

    return(
        <li className="list-group-item wd-tweet-list">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right" style={{color:"white"}}/>
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

                <TweetStats tweet={tweet} liked={liked} setLiked={setLiked}/>

                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <span className="wd-stats"><i className="fas fa-upload"/></span>
                </div>
            </div>
        </li>
    );
};
// <TweetStats tweet={tweet}/>
export default TweetListItem;