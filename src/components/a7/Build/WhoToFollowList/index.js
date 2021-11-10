import React from 'react'
import WhoToFollowListItem from "./WhoToFollowListItem";

import './index.css'
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
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