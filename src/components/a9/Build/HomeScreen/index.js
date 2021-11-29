import React, {useState, useEffect} from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";
import service from "../TweetList/service";

const HomeScreen = () => {

    const [tweets, setTweets] = useState([]);
    //const dispatch = useDispatch();
    useEffect(() => service.findAllTweets().then(tweets => setTweets(tweets)), []);

    return(
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <WhatsHappening setTweets={setTweets} tweets={tweets}/>
                <TweetList setTweets={setTweets} tweets={tweets}/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-5">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    )
}
export default HomeScreen;
