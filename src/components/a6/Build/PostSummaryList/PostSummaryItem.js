import React from 'react'
import './index.css'

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../../../images/react-blue.png"
                             }
                         }
    ) => {
    return (
        <li className="list-group-item" style={{"background-color":"rgb(56, 56, 56)", color:"white"}}>
            <div className="row">
                <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div className="wd-topic">
                        {post.topic}
                    </div>
                    <div>
                        <strong style={{"font-size":"13px"}}>{post.userName} <i className="fas fa-check-circle"/>
                        </strong> <span className="wd-time"> - {post.time}</span><br/>
                        <strong style={{"font-size":"13px"}}>{post.title}</strong>
                    </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src={post.image} className="img-fluid rounded wd-img"/>
                </div>
            </div>
        </li>
    )
}

export default PostSummaryItem;