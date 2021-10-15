const NavigationSidebar = (active) => {

    return (`
    <div class="list-group">
                        <li class="list-group-item wd-first-li" id="wd-first-li"><i class="fab fa-twitter"></i></li>
                        <a href="../HomeScreen/home.html" style="text-decoration:none">
                            <li class="list-group-item wd-first-li ${active === 'home' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Home
                                </div>
                            </div>
                            </li>
                        </a>
                        
                        <a href="../ExploreScreen/explore.html" style="text-decoration:none">
                        <li class="list-group-item wd-first-li ${active === 'explore' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-hashtag"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Explore
                                </div>
                            </div>
                        </li>
                        </a>

                        <a href="notifications.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'notifications' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-bell"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Notifications
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <a href="messages.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'messages' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Messages
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <a href="bookmarks.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'bookmarks' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-bookmark"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Bookmarks
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <a href="lists.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'lists' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-list"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Lists
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <a href="profile.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'profile' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    Profile
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <a href="more.html" style="text-decoration: none">
                        <li class="list-group-item wd-first-li ${active === 'more' ? 'active' : ''}">
                            <div class="row">
                                <div class="col-xxl-2 col-xl-1 col-lg-12">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                                <div class="col-xxl-10 col-xl-10 d-none d-xl-block d-xxl-block">
                                    More
                                </div>
                            </div>
                        </li>
                        </a>
                        
                        <button type="submit" class="wd-tweet-button btn btn-primary rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12"
                                style="margin-top: 10px">
                            Tweet</button>
                    </div>
                    
    `)
}
export default NavigationSidebar;
