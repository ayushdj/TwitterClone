import React from "react";
import {Link, Route} from "react-router-dom";
import './index.css'
import ExploreScreen7 from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/index";
import ProfileScreen7 from "./ProfileScreen";
import who from "../../../reducers/who";
import EditProfile7 from './EditProfile'
import {createStore} from "redux";
const store = createStore(who);

const Build7 = () => {
    return(
        <>
            <div>
                <h1 style={{color:"white"}}>Build</h1>
                <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       component={ExploreScreen7}/>
                <Route path="/a7/twitter/profile"
                       component={ProfileScreen7}/>
                <Route path="/a7/twitter/edit-profile"
                       component={EditProfile7}/>
            </div>
        </>
    )
};

export default Build7;