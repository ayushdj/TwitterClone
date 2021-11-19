import data from './data/profileData.json'

const profile = (state = data, action) => {
    switch (action.type) {
        case 'update-profile':
            const updatedInfo = {
                "firstName": action.newInformation.firstName,
                "lastName": action.newInformation.lastName,
                "handle": "ayushdj",
                "profilePicture":"../../../images/profilePic.png",
                "bannerPicture": "../../../images/coverPhoto.png",
                "bio": action.newInformation.bio,
                "website": action.newInformation.website,
                "location": action.newInformation.location,
                "dateOfBirth":action.newInformation.birthday,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(updatedInfo);

        case 'fetch-profile-data':
            return(action.profileData);
        case "save-changes":
            const newState = {
                "firstName": action.firstName,
                "lastName" :action.lastName,
                "handle":"ayushdj",
                "profilePicture":"../../../images/profilePic.png",
                "bannerPicture": "../../../images/coverPhoto.png",
                "bio":action.bio,
                "website":action.website,
                "location":action.location,
                "dateOfBirth":action.birthday,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(newState);
        default:
            return(state);
    }
}

export default profile;