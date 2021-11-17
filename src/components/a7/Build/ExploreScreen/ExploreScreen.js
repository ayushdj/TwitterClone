import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent7 from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen7 = () => {
    return(
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent7/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-5">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen7;

