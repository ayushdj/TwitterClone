import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
//import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a7/HelloWorld";
import Practice from "./components/a7/Practice/";
import Build from "./components/a7/Build/";
import HomeScreen from "./components/a7/Build/HomeScreen/index.js";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/a7/Build/ProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile"
import Assignment6 from "./components/a6";
import EditProfile from "./components/a7/Build/EditProfile";

const reducer = combineReducers({tweets: tweets, who: who, profile: profile})
const store = createStore(reducer);

function App() {
  return (
      <>
          <Provider store={store}>
              <BrowserRouter>
                  <div className="container">
                      <Route path="/a7/hello" exact={true}>
                          <HelloWorld/>
                      </Route>

                      <Route path={["", "/a7", "/a7/practice"]} exact={true}>
                          <Practice/>
                      </Route>
                      <Route path="/a7/twitter" exact={true}>
                          <Build/>
                      </Route>
                      <Route path="/a7/twitter/home" component={HomeScreen}/>
                      <Route path="/a7/twitter/explore" component={ExploreScreen}/>
                      <Route path="/a7/twitter/profile" component={ProfileScreen}/>
                      <Route path="/a7/twitter/edit-profile" component={EditProfile}/>
                  </div>
              </BrowserRouter>
          </Provider>

          <br/>
          <div style={{borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20}}/>
          <br/>

          <BrowserRouter>
              <div className="container">
                  <Route path={["/a6", "/"]}>
                      <Assignment6/>
                  </Route>
              </div>
          </BrowserRouter>

          <br/>
          <div style={{borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20}}/>
          <br/>
      </>
  );
}
export default App;
