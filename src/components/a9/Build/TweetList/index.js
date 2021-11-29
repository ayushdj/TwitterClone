import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
//import {fetchAllTweets} from "../../../../services/twitterService";
import service from "./service";

//const selectAllTweets = (state) => state.tweets;

const TweetList = ({setTweets, tweets}) => {
    //const tweets = useSelector(selectAllTweets);
    //const [tweets, setTweets] = useState([]);
    //const dispatch = useDispatch();
    //useEffect(() => service.findAllTweets().then(tweets => setTweets(tweets)), []);

    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet} setTweets={setTweets} tweets={tweets}/>
                )
            }
        </ul>
    )
};
export default TweetList;