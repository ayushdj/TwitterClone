import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Hello World!</h1>
            <Link to="/a8/practice">Practice</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a8/twitter/home">Build</Link>
        </>
    )
};

export default HelloWorld;
