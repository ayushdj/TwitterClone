import React, {useState} from "react";
import './index.css'
import tesla from './tesla.png'
import {useDispatch} from "react-redux";
//import {postNewTweet} from "../../../../services/twitterService";
import service from '../TweetList/service'

const WhatsHappening = ({setTweets, tweets}) => {

    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();


    const tweetClickHandler = () => {
        const newlyCreatedTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "tweet": whatsHappening,
            "time": "2h",
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "tweets":"30k",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
        };
        service.createTweet(newlyCreatedTweet).then((newTweet) => setTweets([
            {...newTweet}, ...tweets
        ]));
    }

    return(

        <>
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1">
                    <img src={tesla}
                         className="rounded-circle float-start wd-avatar" alt={"image"}/>
                </div>

                <div className="col-xxl-11 col-xl-11 col-lg-11">
                    <textarea value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)} placeholder="What's Happening?" className="wd-text col-lg-12 row-10">
                    </textarea>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1" >

                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">

                    <i className="far fa-image wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="fas fa-chart-line wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="far fa-smile wd-imageIcon" style={{color:"rgb(29, 161, 242)"}}/>
                    <i className="far fa-calendar" style={{color:"rgb(29, 161, 242)"}}/>


                </div>

                <button onClick={tweetClickHandler} type="submit" className="wd-tweet-button2 btn btn-primary float-end rounded-pill col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2"
                >Tweet
                </button>
            </div>
        </>

);
}
export default WhatsHappening;
