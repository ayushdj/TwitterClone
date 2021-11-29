import React from "react";
import {Link} from "react-router-dom";
import './index.css'

const NavigationSidebar = ({
                               active = 'explore'
                           }
    ) => {

    const isActive = (active, path) => `wd-link-item list-group-item ${active === path ? 'active' : ''}`;

    return (
        <>
            <div className="list-group">
                <Link to="/a9" className="list-group-item" style={{"background-color":"rgb(56, 56, 56)", color:"white"}}>
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/a9/twitter/home" className={isActive(active, 'home')}>
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>

                <Link to="/a9/twitter/explore" className={isActive(active, 'explore')}>
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline"> Explore</span>
                </Link>

                <Link to="/a9/twitter/notifications" className={isActive(active, 'notifications')}>
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </Link>

                <Link to="/a9/twitter/messages" className={isActive(active, 'messages')}>
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-inline"> Messages</span>
                </Link>

                <Link to="/a9/twitter/bookmarks" className={isActive(active, 'bookmarks')}>
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </Link>

                <Link to="/a9/twitter/lists" className={isActive(active, 'lists')}>
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-inline"> Lists</span>
                </Link>

                <Link to="/a9/twitter/profile" className={isActive(active, 'profile')}>
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-inline"> Profile</span>
                </Link>

                <Link to="/a9/twitter/more" className={isActive(active, 'more')}>
                    <i className="fas fa-ellipsis-h"/>
                    <span className="d-none d-xl-inline"> More</span>
                </Link>
            </div>
            <button type="submit" className="wd-tweet-button btn btn-primary rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12"
                    style={{"margin-top": "10px"}}>Tweet
            </button>
        </>
    );
}
export default NavigationSidebar;
