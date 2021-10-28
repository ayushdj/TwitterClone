import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-xs-1 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('explore')}
            </div>
            
            <div class="d-lg-block col-lg-7 col-xl-6 col-md-10 col-sm-10 col-xs-4">
                ${ExploreComponent()}
            </div>
                
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                ${WhoToFollowList()}
            </div>
        </div>    
    `);


    const followButton = $(".wd-follow-button");
    followButton.css("background-color", "rgb(29, 161, 242)");

    const tweetButton = $(".wd-tweet-button");
    tweetButton.css("background-color", "rgb(29, 161, 242)");

    const cog = $(".wd-cog");
    cog.css("color", "rgb(29, 161, 242)");

    const navStuff = $(".wd-nav-links");
    navStuff.css("border", "none").css("color", "white");

    const navTabs = $(".wd-nav-tabs");
    navTabs.css("border-bottom", "1px solid rgb(56, 56, 56)");

    const liFirstCol = $(".wd-first-li");
    liFirstCol.css("background-color", "rgb(56, 56, 56)").css("color", "white");

    const activeStuff = $(".active");
    activeStuff.css("background-color", "rgb(29, 161, 242)");
})($);
