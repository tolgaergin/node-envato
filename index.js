const axios = require('axios');

const URL = 'https://api.envato.com';

class EnvatoApi {
  constructor(options) {
    this.username = options.username;
    this.token = options.token;
  }

  get(url) {
    return axios.get(URL + '/v1/market/' + url, {
      headers: { Authorization: 'Bearer ' + this.token },
    })
    .then(result => result.data)
    .catch(err => console.log(err.response.data));
  }

  totalItems() {
    return this.get('total-items.json');
  }

  account() {
    return this.get('private/user/account.json');
  }

  // totalItems() {
  //   return axios.get(URL + '/v1/market/total-items.json', {
  //     headers: { Authorization: 'Bearer ' + this.token },
  //   })
  //   .then(result => result.data)
  //   .catch(err => console.log(err.response.data));
  // }

  // With callback function
  // totalItems(callback) {
  //   axios.get(URL + '/v1/market/total-items.json', {
  //     headers: { Authorization: 'Bearer ' + this.token },
  //   })
  //   .then(result => callback(null, result.data))
  //   .catch(err => callback(err.response.data));
  // }
}

module.exports = function (options) {
  return new EnvatoApi(options);
};
