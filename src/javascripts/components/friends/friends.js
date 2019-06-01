import firebase from 'firebase/app';
import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import util from '../../helpers/util';


const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error('no new friend added', err));
  console.error(newFriend);
};
const newFriendButton = () => {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};
const showFriends = () => {
  const domString = '<button id = "add-friend-btn" class = "btn btn-outline-danger">Add Friend</button>';
  util.printToDom('friends', domString);
  document.getElementById('add-friend-btn').addEventListener('click', newFriendButton);
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error('friends array', friends);
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
