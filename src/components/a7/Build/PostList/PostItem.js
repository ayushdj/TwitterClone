import React from 'react'
import './index.css'

const PostItem = ({post = {
        accountName: "Elon Musk", handle: "@elonmusk", time: "23h", preLinkPost:"Amazing show about", linkPost:"@Inspiration4x", postLinkPost:"mission!", imageSrc:"../../../images/inspiration.jpg",
        cardTitle:"Countdown: Inspiration4 Mission to Space | Netflix Official Site", cardContent:"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        link:"netflix.com",
        numComments:"4.2K", numReTweets:"3.5K", numLikes:"37.5K", profilePic:"../../../images/muskProfilePic.jpg"
        }
}) => {
    return(
       <li className ="list-group-item wd-middle-col">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src={post.profilePic} className="img-fluid rounded-circle wd-profile-pic"/>
                </div>
                
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">
                    <strong className="wd-account-name">{post.accountName}</strong> <i className="fas fa-check-circle wd-check"/>
                    <span className="wd-handleTime"> {post.handle} - {post.time}</span><br/>
                    <p className="wd-preLink">{post.preLinkPost}
                    <span style={{color:"rgb(29, 161, 242)"}}> {post.linkPost}</span> {post.postLinkPost}
                    </p>
                </div>
                
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <i className="fas fa-ellipsis-h wd-ellipsis"/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"/>
                <div className="list-group-item col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11" style={{"background-color":"black", color:"white",
                "border": "1px solid rgb(110, 118, 125)", "border-top-left-radius":"20px",
                    "border-top-right-radius":"20px", "margin-top": "-10px", "max-width":"120.9%",
                    "border-bottom-left-radius":"20px", "border-bottom-right-radius":"20px"}}>
                    <img src={post.imageSrc} className="img-responsive wd-imageSrc"/>
                    
                    <div className="wd-cardTitle">{post.cardTitle}</div>
                    <div className="wd-card-content">{post.cardContent}</div>
                        <div className="wd-post-link">{post.link !== "" ? <i className="fas fa-link"/> : ""} {post.link}</div>
                </div>
            </div>
            
            <div className="row wd-second-div">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"/>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span className="wd-msgIcon"><i className="far fa-comment"/></span> <span className="wd-num1">{post.numComments}</span>
                </div>
                
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"> 
                    <span className="wd-retweet"><i className="fas fa-retweet"/></span> <span className="wd-numRetweet">{post.numReTweets}</span>
                </div>
                
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span className="wd-heart"><i className="fas fa-heart"/></span> <span className="wd-numLikes">{post.numLikes}</span>
                </div>
                
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <span className="wd-upload"><i className="fas fa-upload"/></span>
                </div>
            </div>
       </li>
    )
}

export default PostItem;