import React from 'react'
import PostSummaryList from "../PostSummaryList";
import './index.css'


// search bar and nav bars
const ExploreComponent7 = () => {
    return(
        <>
           <div className="row">

                        <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
                            <label className="input-group-text bg-transparent rounded-pill border-0">
                                <i className="fa fa-search"/>
                            </label>
                            <input type="text" className="form-control rounded-pill wd-twitter-search" placeholder="Search Twitter"/>
                        </div>
                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 wd-cog">
                            <i className="fa fa-cog fa-2x" aria-hidden="true"/>
                        </div>

           </div>
           <ul className="nav mb-2 nav-tabs py-2 wd-nav-tabs">
                <li className="nav-item">
                           <a className="nav-link active wd-nav-links" href="for-you.html">For you</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wd-nav-links" href="trending.html">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wd-nav-links" href="news.html">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link wd-nav-links" href="sports.html" tabIndex="-1">Sports</a>
                            </li>
                            <li className="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block wd-entertainment">
                                <a className="nav-link wd-nav-links" href="entertainment.html" tabIndex="-1">Entertainment</a>
                            </li>
               <img src={"../../../images/starship.jpg"} className="img-fluid"/>
               <p className="h1 wd-image-caption" >Space X's Starship</p>
               <PostSummaryList/>
           </ul>

        </>
    );
}
export default ExploreComponent7;
