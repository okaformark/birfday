import util from '../../helpers/util';

const authDomStringBuilder = () => {
  let domString = '';
  domString += 'auth';
  util.printToDom('auth', domString);
};

export default { authDomStringBuilder };
