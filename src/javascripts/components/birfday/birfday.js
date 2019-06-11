import birfdayData from '../../helpers/data/birfdayData';
import util from '../../helpers/util';


const birfdayDomStringBuilder = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthdayResp) => {
    let domString = '';
    domString += `<h1>${birthdayResp.date}</h1>`;
    domString += `<img src=${birthdayResp.imageUrl} alt="birthday location"/>`;
    domString += `<h2>${birthdayResp.location} @ ${birthdayResp.time}</h2>`;
    util.printToDom('event', domString);
  }).catch(err => console.error('could not get birthday', err));
};

export default { birfdayDomStringBuilder };
