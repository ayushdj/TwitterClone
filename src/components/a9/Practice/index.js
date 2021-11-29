import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const Practice = () => {

    return(
        <>
            <h1 style={{color:"white"}}>A9 Practice</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <Movies/>
        </>
    )
};

export default Practice;