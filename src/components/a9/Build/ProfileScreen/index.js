import React, {useEffect, useState} from "react";
import NavigationSidebar from "../NavigationSidebar";
import {useSelector, useDispatch} from "react-redux";
import Profile from './Profile';
import {fetchProfile} from "../../../../services/profileService";
import service from './service';
import ChangeProfile from "./EditProfile/ChangeProfile";
const selectProfile = (state) => state.profile;

const ProfileScreen = () => {
    /*
    const profile = useSelector(selectProfile);
    console.log(profile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), []);
     */
    const [edit, setEdit] = useState(false);

    const profileData = useSelector(selectProfile);
    const dispatch = useDispatch();
    useEffect(() => service.findProfileById("61a2a6006d05d5143f2e0acc", dispatch));
    return(
        <>
        {!edit ? <div className="row py-5">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            <NavigationSidebar active="profile"/>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <div className="row">
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                        <i className="fas fa-arrow-left wd-leftArrow"/>
                    </div>
                    <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
                        <strong className="wd-top-name">{profileData.firstName} {profileData.lastName}</strong><br/>
                        <span className="wd-num-tweets">5,196 Tweets</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={profileData.bannerPicture} className="wd-banner" alt={"banner"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <img src={profileData.profilePicture} className="img-fluid wd-ProfilePic" alt={"profilePic"}/>
                    </div>
                    <div className="col-2">
                        <button type="submit" onClick={() => setEdit(true)}
                                className="wd-edit-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            Edit Profile
                        </button>
                        {/*//<Link to="/a9/twitter/edit-profile">*/}
                        {/*
                        {!edit ?
                            <button type="submit" onClick={() => setEdit(true)}
                                    className="wd-edit-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                Edit Profile
                            </button> :
                            <button type="submit" onClick={() => setEdit(false)}
                                    className="wd-edit-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                Save
                            </button> }*/}
                        {/*</Link>*/}
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12">
                        <strong className="wd-top-name2">{profileData.firstName} {profileData.lastName}</strong><br/>
                        <span className="wd-handle">@{profileData.handle}</span>
                        <p className="wd-bio">{profileData.bio}</p>
                        <i className="fas fa-map-marker-alt wd-map"/> <span className="wd-loc">{profileData.location} </span>
                        <i className="fas fa-birthday-cake wd-map"/> <span className="wd-loc">Born {profileData.dateOfBirth} </span>
                        <i className="fas fa-calendar-alt wd-map"/> <span className="wd-loc">Joined {profileData.dateJoined} </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <br/>
                        <strong style={{marginLeft:"20px", color:"white"}}>{profileData.followingCount}</strong>
                        <span style={{color:"rgb(105, 105, 105)"}}> Following</span>
                        <strong style={{color:"white", marginLeft:"20px"}}> {profileData.followersCount}</strong>
                        <span style={{color:"rgb(105, 105, 105)"}}> Followers</span>
                    </div>
                </div>
        </div>
    </div> : <div className="row py-5">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    <ChangeProfile profileData={profileData} edit={edit} setEdit={setEdit} profileID={profileData._id}/>
                </div>
        </div>}
        </>
    )
}
/*
<div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <Profile profileData={prof}/>
            </div>
        </div>
*/
export default ProfileScreen;