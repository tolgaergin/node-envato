const axios = require('axios');
const httpAdapter = require('axios/lib/adapters/http');
const querystring = require('querystring');

// axios settings needed when testing actions
axios.defaults.host = 'https://api.envato.com';
axios.defaults.adapter = httpAdapter;

class EnvatoApi {
  constructor(options) {
    this.username = options.username;
    this.token = options.token;
    this.baseUrl = 'https://api.envato.com/';
    this.baseVersion = 'v1';
  }

  prepareUrl(version, url) {
    return this.baseUrl + (version ? version : this.baseVersion) + url;
  }

  get(options, callback) {

    let url = this.prepareUrl(options.version, options.url);

    if (options.params) {
      url += '?' + querystring.stringify(options.params);
    }

    return axios.get(url, {
      headers: { Authorization: 'Bearer ' + this.token },
    })
    .then(result => callback(null, result.data))
    .catch(err => callback(err));
  }

  totalItems(callback) {
    return this.get({
      url: '/market/total-items.json',
    }, callback);
  }

  totalUsers(callback) {
    return this.get({
      url: '/market/total-users.json',
    }, callback);
  }

  userUsername(callback) {
    return this.get({
      url: '/market/private/user/username.json',
    }, callback);
  }

  userEmail(callback) {
    return this.get({
      url: '/market/private/user/email.json',
    }, callback);
  }

  userDetails(params, callback) {
    return this.get({
      url: '/market/user:' + params.username + '.json',
    }, callback);
  }

  userAccount(callback) {
    return this.get({
      url: '/market/private/user/account.json',
    }, callback);
  }

  userBadges(params, callback) {
    return this.get({
      url: '/market/user-badges:' + params.username + '.json',
    }, callback);
  }

  authorItemsBySite(params, callback) {
    return this.get({
      url: '/market/user-items-by-site:' + params.username + '.json',
    }, callback);
  }

  authorFiles(params, callback) {
    const { username, site } = params;

    return this.get({
      url: `/market/new-files-from-user:${username},${site}.json`,
    }, callback);
  }

  authorEarningsSales(callback) {
    return this.get({
      url: '/market/private/user/earnings-and-sales-by-month.json',
    }, callback);
  }

  authorStatement(params, callback) {
    return this.get({
      url: '/market/user/statement',
      version: 'v3',
      params,
    }, callback);
  }
}

module.exports = function (options) {
  return new EnvatoApi(options);
};
