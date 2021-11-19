const PROFILE_API = 'http://localhost:4000/api/profile';

export const fetchProfile = (dispatch) => {
    fetch(PROFILE_API).then(response => response.json())
        .then(profileData => dispatch({
            type:'fetch-profile-data',
            profileData
        }))
}

export const updateProfile = (dispatch, newInformation) =>
    fetch(PROFILE_API, {
            method: 'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(newInformation)
        }).then(response => dispatch({
            type: 'update-profile',
            newInformation
        }))