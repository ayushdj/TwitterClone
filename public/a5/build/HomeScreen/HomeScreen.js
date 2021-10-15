import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js"

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-xs-1 col-sm-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        
        <div class=" col-xs-4 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 d-lg-block">
            ${PostList()}
        </div>
            
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
            ${PostSummaryList()}
        </div>
        </div>
     
    `);


    const followButton = $(".wd-follow-button");
    followButton.css("background-color", "rgb(29, 161, 242)");

    const tweetButton = $(".wd-tweet-button");
    tweetButton.css("background-color", "rgb(29, 161, 242)");

    const rightSideImages = $(".wd-img");
    rightSideImages
        .css("width", "60px")
        .css("height", "60px");

    const liFirstCol = $(".wd-first-li");
    liFirstCol.css("background-color", "rgb(56, 56, 56)").css("color", "white");

    const liSecondCol = $(".wd-middle-coll");
    liSecondCol.css("background-color", "black").css("color", "white")
        .css("border", "1px solid rgb(56, 56, 56)");

    const activeStuff = $(".active");
    activeStuff.css("background-color", "rgb(29, 161, 242)");

})($);