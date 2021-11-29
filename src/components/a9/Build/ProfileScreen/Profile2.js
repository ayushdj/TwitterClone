import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import './index.css';
import EditProfile from "./EditProfile";
import ChangeProfile from "./EditProfile/ChangeProfile";

const Profile2 = ({profileData}) => {
    const [edit, setEdit] = useState(false);
    return (<>
            {!edit}
        </>
    )
}