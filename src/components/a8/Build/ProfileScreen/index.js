import React, {useEffect} from "react";
import NavigationSidebar from "../NavigationSidebar";
import {useSelector, useDispatch} from "react-redux";
import Profile from './Profile'
import {fetchProfile} from "../../../../services/profileService";

const selectProfile = (state) => state.profile;

const ProfileScreen = () => {
    const profile = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), []);
    console.log(profile);
    return(
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <Profile profileData={profile}/>
            </div>
        </div>
    )
}
export default ProfileScreen;