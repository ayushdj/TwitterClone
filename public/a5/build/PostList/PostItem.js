import "./posts.js";

const PostItem = (post) => {
    return(`
       <li class = "list-group-item wd-middle-coll">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img src="${post.profilePic}" style="width:40px; height:40px; margin-left:-8px;margin-top:5px"
                    class="img-fluid rounded-circle">
                </div>
                
                <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8">
                    <strong style="margin-left:-55px; font-size:14px;">${post.accountName} </strong><i class="fas fa-check-circle"></i>
                    <span style="font-size:13px; color:rgb(110, 118, 125)"> ${post.handle} - ${post.time}</span><br>
                    <p style="font-size:13px; color:white; margin-left:-55px">${post.preLinkPost}
                    <span style="color:rgb(29, 161, 242)">${post.linkPost}</span> ${post.postLinkPost}
                    </p>
                </div>
                
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <i class="fas fa-ellipsis-h" style="color:rgb(110, 118, 125); margin-left:20px"></i>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                <div class="list-group-item col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11" style="
                        border:1px solid rgb(110, 118, 125); border-radius: 20px; background-color:black;">
                    <img src="${post.imageSrc}" class="img-responsive" style="border-bottom:1px solid rgb(110, 118, 125);
                    margin-left:-16px;border-top-left-radius:20px;border-top-right-radius:20px;margin-top: -8px; max-width:105.9%">
                    
                    <div style="color:white; margin-top: 5px">${post.cardTitle}</div>
                    <div style="color:rgb(110, 118, 125); font-size:13px">${post.cardContent}</div>
                    <div style="color:rgb(110, 118, 125); font-size:13px">${post.link !== "" ? "<i class=\"fas fa-link\"></i>" : ""} ${post.link}</div>
                    
                </div>
                
            </div>
            
            <div class="row" style="margin-left:-10px; margin-top:10px">
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span class="wd-msgIcon" style=" color:rgb(110, 118, 125); font-size:12px"><i class="far fa-comment"></i></span> <span class="wd-num1" style="color:rgb(110, 118, 125); font-size:12px">${post.numComments}</span>
                </div>
                
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"> 
                    <span class="wd-retweet" style="color:rgb(110, 118, 125); font-size:12px"><i class="fas fa-retweet"></i></span> <span class="wd-numRetweet" style="color:rgb(110, 118, 125); font-size:12px">${post.numReTweets}</span>
                </div>
                
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <span class="wd-heart" style="color:rgb(110, 118, 125); font-size:12px"><i class="fas fa-heart"></i></span> <span class="wd-numLikes" style="color:rgb(110, 118, 125); font-size:12px">${post.numLikes}</span>
                </div>
                
                <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <span class="wd-upload" style="color:rgb(110, 118, 125); font-size:12px"><i class="fas fa-upload"></i></span>
                </div>
            </div>
       </li>     
            
    `)
}

export default PostItem;