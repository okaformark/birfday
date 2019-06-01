import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, friendObject);

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResult = results.data;
      console.error(friendResult);
      const friends = [];

      // gets the key of the object "friend1"
      Object.keys(friendResult).forEach((friendId) => {
        friendResult[friendId].id = friendId;
        console.error(friendResult[friendId]);
        friends.push(friendResult[friendId]);
      });
      // console.error(friends);
      resolve(friends);
    })
    .catch(err => reject(err));
});


export default { addNewFriend, getFriendsByUid };
