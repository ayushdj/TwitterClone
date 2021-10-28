import React from 'react'
import './index.css'


const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'nasa',
                                 }
                             }) => {
    return (
            <li className="list-group-item" style={{"background-color":"rgb(56, 56, 56)", color:"white"}}>
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2">
                        <img src={who.avatarIcon}
                             className="rounded-circle float-start wd-avatar" alt={"image"}/>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-6">
                        <strong>{who.userName} <i className="fas fa-check-circle"/></strong><br/>
                        {who.handle}
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-3">
                        <button type="submit" className="btn btn-primary rounded-pill align-middle wd-follow-button">
                            Follow</button>
                    </div>
                </div>
            </li>
    )
}

export default WhoToFollowListItem;