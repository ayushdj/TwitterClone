import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <!-- continue here -->
            <li class="list-group-item" style="background-color:rgb(56,56,56); color:white;"><strong>Who to follow</strong></li>
            ${
            who.map(whose => {
                return WhoToFollowListItem(whose);
            }).join('')
            }
        </ul>
    `)
}

export default WhoToFollowList;