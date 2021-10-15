import './posts.js'
const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item" style="background-color:rgb(56,56,56); color:white;">
            <div class="row">
                <div class="col-xxl-10 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div style="font-size:13px; color:rgb(110, 118, 125)">
                        ${post.topic}
                    </div>
                    <div>
                        <strong style="font-size:13px">${post.userName} <i class="fas fa-check-circle"></i>
                        </strong> <span style="font-size:12px; color:rgb(110, 118, 125)"> - ${post.time}</span><br>
                        <strong style="font-size:13px">${post.title}</strong>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src="${post.image}" class="img-fluid rounded wd-img" style="width:100px; height:90px;">
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;