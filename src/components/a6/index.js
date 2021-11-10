import {BrowserRouter, Route, Link} from "react-router-dom";
import '../../vendors/bootstrap/css/bootstrap.min.css';
import '../../vendors/bootstrap/bootstrap.min.css';
import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";


function Assignment6() {
    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Route path="/a6/hello" exact={true}>
                        <HelloWorld/>
                    </Route>

                    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a6/twitter/home" exact={true}>
                        <Build/>
                    </Route>
                    <Route path="/a6/twitter/explore" component={ExploreScreen}/>
                </BrowserRouter>
            </div>
        </>

    );
}
export default Assignment6;