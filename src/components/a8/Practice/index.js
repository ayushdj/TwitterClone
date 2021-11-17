import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";

const Practice = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Assignment 8 Practice</h1>
            <Link to="/a8/hello">Hello</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
            <ReduxExamples/>
        </>
    )
};

export default Practice;