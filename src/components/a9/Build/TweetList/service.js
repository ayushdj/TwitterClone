const URL = 'http://localhost:4000/rest/tweets';

export const findAllTweets = () =>
    fetch(URL)
        .then(response => response.json());

export const deleteTweet = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const createTweet = (tweet) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const likeTweet = (tweet) =>
    //(tweet).liked = !(tweet).liked;
    fetch(`${URL}/${tweet._id}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export default {
    findAllTweets, deleteTweet, createTweet, likeTweet
};