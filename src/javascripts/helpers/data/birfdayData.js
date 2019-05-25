import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getBirfdayByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birfdayResult = results.data;
      console.error(birfdayResult);
      const birfdays = [];

      // gets the key of the object "birthday1"
      Object.keys(birfdayResult).forEach((birthdayId) => {
        birfdayResult[birthdayId].id = birthdayId;
        console.error(birfdayResult[birthdayId]);
        birfdays.push(birfdayResult[birthdayId]);
      });
      // console.error(birfdays);
      resolve(birfdays[0]);
    })
    .catch(err => reject(err));
});

export default { getBirfdayByUid };
