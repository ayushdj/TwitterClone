import "./who.js"

const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item" style="background-color:rgb(56, 56, 56); color:white;">
              <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2">
                    <img src="${who.avatarIcon}" style="width:40px; height:40px; margin-left:-8px;margin-top:5px"
                    class="img-fluid rounded-circle">
                </div>
                <div class="col-xxl-7 col-xl-6 col-lg-6" style="margin-left:-25px">
                    <strong>${who.userName} <i class="fas fa-check-circle"></i></strong><br>
                    ${who.handle}
                </div>

                <div class="col-xxl-3 col-xl-2 col-lg-1 ps-5 pt-1">
                    <button type="submit" class="btn btn-primary rounded-pill align-middle wd-follow-button">
                    Follow</button>
                </div>
              </div>
        </li>
    `)
}

export default WhoToFollowListItem;