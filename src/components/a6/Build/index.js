import React from "react";
import {Link, Route} from "react-router-dom";
import './index.css'
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Build = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Build</h1>
            <Link to="/a6/hello">Hello</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a6/practice">Practice</Link>
            <Route path="/a6/twitter/home" exact={true} component={HomeScreen}/>
            <Route path="/a6/twitter/explore" exact={true} component={ExploreScreen}/>
        </>

    )
};

export default Build;