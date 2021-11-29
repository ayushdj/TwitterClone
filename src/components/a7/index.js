import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice"
import Build from "./Build";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import who from "../../reducers/who"
import tweets from "../../reducers/tweets";
import profile from "../../reducers/profile"
const reducer = combineReducers({tweets: tweets, who: who, profile: profile})
const store = createStore(reducer);

const Assignment7 = () => {
    return (
        <>
                <div className="container">
                    <BrowserRouter>
                        <Route path="/a7/hello" exact={true}>
                            <HelloWorld/>
                        </Route>
                        <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                            <Practice/>
                        </Route>
                        <Route path="/a7/twitter">
                            <Build/>
                        </Route>
                    </BrowserRouter>
                </div>
        </>
    )
}

export default Assignment7;