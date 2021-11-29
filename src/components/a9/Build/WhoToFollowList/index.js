import React, {useState, useEffect} from 'react'
import WhoToFollowListItem from "./WhoToFollowListItem";
import './index.css'
import {useSelector} from "react-redux";
import service from './service';

//const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    //const who = useSelector(selectAllWho);
    const [who, setWho] = useState([]);
    useEffect(() => service.findAllWho().then(who => setWho(who)), []);

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