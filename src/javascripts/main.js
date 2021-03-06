import firebase from 'firebase/app';
import auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import myNavBar from './components/myNavBar/myNavBar';
import authData from './helpers/data/authData';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavBar.navBarEvents();
  authData.checkLoginStatus();
  auth.authDomStringBuilder();
};
init();
