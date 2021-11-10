import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Assignment 6 Practice</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/a6/hello">Hello</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a6/twitter/home">Build</Link>

        </>
    )
};

export default Practice;