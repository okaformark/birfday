import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import googleImg from './googleButton.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};
const authDomStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn-outline-danger">';
  domString += `<img src=${googleImg} width="248" height="103"/>`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authDomStringBuilder };
