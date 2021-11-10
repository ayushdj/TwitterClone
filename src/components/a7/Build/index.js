import React from "react";
import {Link, Route} from "react-router-dom";
import './index.css'
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/index";
import ProfileScreen from "./ProfileScreen";
import who from "../../../reducers/who";
import EditProfile from './EditProfile'

import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(who);

const Build = () => {
    return(
        <>
            <Provider store={store}>
                <div>
                    <h1 style={{color:"white"}}>Build</h1>
                    <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
                    <Route path="/a7/twitter/explore"
                           exact={true} component={ExploreScreen}/>
                    <Route path="/a7/twitter/profile"
                           component={ProfileScreen}/>
                    <Route path="/a7/twitter/edit-profile"
                           component={EditProfile}/>
                </div>
            </Provider>
        </>
    )
};

export default Build;