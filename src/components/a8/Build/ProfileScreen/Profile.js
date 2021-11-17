import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import './index.css'

const Profile = ({profileData}) => {

    const dispatch = useDispatch();

    return (
        <>
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
                    <Link to="/a8/twitter/edit-profile">
                        <button type="submit"
                                className="wd-edit-profile btn btn-primary float-end rounded-pill col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            Edit Profile
                        </button>
                    </Link>
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
        </>
    )
}

export default Profile;