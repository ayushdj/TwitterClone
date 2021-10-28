import React from "react";
import {Link} from "react-router-dom";
import './index.css'
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Build = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            <ExploreScreen/>
        </>

    )
};

export default Build;