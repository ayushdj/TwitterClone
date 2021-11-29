import React, {useEffect, useState} from "react";
import NavigationSidebar from "../../NavigationSidebar";
import {useSelector, useDispatch} from "react-redux";
import ChangeProfile from "./ChangeProfile";
import service from "../service";
import {Link} from "react-router-dom";
//import {fetchProfile} from "../../../../../services/profileService";

const selectProfile = (state) => state.profile;

const EditProfile = () => {

    const prof2 = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => service.findProfileById("61a2a6006d05d5143f2e0acc", dispatch), []);

    return (
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <ChangeProfile profileData={prof2}/>
            </div>
        </div>
    )
}
export default EditProfile;