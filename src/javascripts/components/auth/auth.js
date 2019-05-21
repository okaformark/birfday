import util from '../../helpers/util';

const authDomStringBuilder = () => {
  let domString = '';
  domString += '<h5>auth</h5>';
  util.printToDom('auth', domString);
};

export default { authDomStringBuilder };
