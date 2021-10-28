import React from 'react'
import WhoToFollowListItem from "./WhoToFollowListItem";
// who.json is an array of objects
import who from "./who.json";
import './index.css'

const WhoToFollowList = () => {
    return(
            <ul className="list-group col-xxl-12">
                <li className="list-group-item" style={{"background-color":"rgb(56, 56, 56)", color:"white"}}><strong>Who to follow</strong></li>
                {
                who.map(whose => {
                    return (<WhoToFollowListItem who={whose}/>);
                })
                }
            </ul>
        );
}

export default WhoToFollowList;