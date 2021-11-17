import React from "react";
import {Link} from "react-router-dom";

const HelloWorld7 = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Hello World!</h1>
            <Link to="/a7/practice">Practice</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a7/twitter/home">Build</Link>
        </>
    )
};

export default HelloWorld7;
