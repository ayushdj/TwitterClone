import PostSummaryList from "../PostSummaryList/index.js";


// search bar and nav bars
const ExploreComponent = () => {
    return(`
           <div class="row">
                <div class="row mt-2">
                        <div class="col-11">
                            <label class="input-group-text bg-transparent rounded-pill border-0">
                                <i class="fa fa-search"></i>
                            </label>
                            <input type="text" class="form-control rounded-pill" placeholder="Search Twitter"
                                   style="padding-left:40px; margin-top:-32px">
                        </div>
                        <div class="col-1 wd-cog">
                            <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs py-2 wd-nav-tabs">
                <li class="nav-item">
                           <a class="nav-link active wd-nav-links" href="for-you.html">For you</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link wd-nav-links" href="trending.html">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link wd-nav-links" href="news.html">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link wd-nav-links" href="sports.html" tabindex="-1">Sports</a>
                            </li>
                            <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block wd-entertainment">
                                <a class="nav-link wd-nav-links" href="entertainment.html" tabindex="-1">Entertainment</a>
                            </li>
           </ul>
           <img src="../../images/starship.jpg" class="img-fluid">
           <p class="h1" style="margin-top: -55px; color:white; margin-left:10px">Space X's Starship</p>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
