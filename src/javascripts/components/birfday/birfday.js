import util from '../../helpers/util';

const birfdayDomStringBuilder = () => {
  let domString = '';
  domString += '<h5>birfday</h5>';
  util.printToDom('birfday', domString);
};

export default { birfdayDomStringBuilder };
