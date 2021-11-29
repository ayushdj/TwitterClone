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
                "dateOfBirth":action.newInformation.dateOfBirth,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(updatedInfo);
        case 'save-changes':
            const newInfo = {
                "firstName": action.firstName,
                "lastName": action.lastName,
                "handle": "ayushdj",
                "profilePicture":"../../../images/profilePic.png",
                "bannerPicture": "../../../images/coverPhoto.png",
                "bio": action.bio,
                "website": action.website,
                "location": action.location,
                "dateOfBirth": action.birthday,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(newInfo);
        case 'fetch-profile-data':
            return(action.profileData);
        case 'render-mongo-data':
            return(action.profileData);
        case 'mongo-update-profile':
            const newProf = {
                "firstName": action.newProfile.firstName,
                "lastName": action.newProfile.lastName,
                "handle": "ayushdj",
                "profilePicture":"../../../images/profilePic.png",
                "bannerPicture": "../../../images/coverPhoto.png",
                "bio": action.newProfile.bio,
                "website": action.newProfile.website,
                "location": action.newProfile.location,
                "dateOfBirth":action.newProfile.dateOfBirth,
                "dateJoined": "June 2013",
                "followingCount": 69,
                "followersCount": 420
            }
            return(newProf);
        default:
            return(state);
    }
}

export default profile;