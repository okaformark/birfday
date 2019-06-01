import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getRsvpsByBirthdayId = birthdayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/rsvps.json?orderBy="birthdayId"&equalTo="${birthdayId}"`)
    .then((results) => {
      const rsvpResult = results.data;
      // console.error(rsvpResult);
      const rsvps = [];

      // gets the key of the object "rsvp1"
      Object.keys(rsvpResult).forEach((rsvpId) => {
        rsvpResult[rsvpId].id = rsvpId;
        // console.error(rsvpResult[rsvpId]);
        rsvps.push(rsvpResult[rsvpId]);
      });
      // console.error(rsvps);
      resolve(rsvps);
    })
    .catch(err => reject(err));
});
const addRsvp = rsvp => axios.post(`${firebaseUrl}/rsvps.json`, rsvp);
const editRsvp = (rsvpId, rsvpObj) => axios.put(`${firebaseUrl}/rsvps/${rsvpId}.json`, rsvpObj);

export default { getRsvpsByBirthdayId, addRsvp, editRsvp };
