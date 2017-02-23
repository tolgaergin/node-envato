'use strict';

var _createClass = function () {
  function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
  var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
  } } return function (Constructor, protoProps, staticProps) {

 if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
 }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var axios = require('axios');
var httpAdapter = require('axios/lib/adapters/http');
var querystring = require('querystring');

// axios settings needed when testing actions
axios.defaults.host = 'https://api.envato.com';
axios.defaults.adapter = httpAdapter;

var EnvatoApi = function () {
  function EnvatoApi(options) {
    _classCallCheck(this, EnvatoApi);

    this.username = options.username;
    this.token = options.token;
    this.baseUrl = 'https://api.envato.com/';
    this.baseVersion = 'v1';
  }

  _createClass(EnvatoApi, [{
    key: 'prepareUrl',
    value: function prepareUrl(version, url) {
      return this.baseUrl + (version ? version : this.baseVersion) + url;
    },
  }, {
    key: 'get',
    value: function get(options, callback) {

      var url = this.prepareUrl(options.version, options.url);

      if (options.params) {
        url += '?' + querystring.stringify(options.params);
      }

      return axios.get(url, {
        headers: { Authorization: 'Bearer ' + this.token },
      }).then(function (result) {
        return callback(null, result.data);
      }).catch(function (err) {
        return callback(err);
      });
    },
  }, {
    key: 'totalItems',
    value: function totalItems(callback) {
      return this.get({
        url: '/market/total-items.json',
      }, callback);
    },
  }, {
    key: 'totalUsers',
    value: function totalUsers(callback) {
      return this.get({
        url: '/market/total-users.json',
      }, callback);
    },
  }, {
    key: 'userUsername',
    value: function userUsername(callback) {
      return this.get({
        url: '/market/private/user/username.json',
      }, callback);
    },
  }, {
    key: 'userEmail',
    value: function userEmail(callback) {
      return this.get({
        url: '/market/private/user/email.json',
      }, callback);
    },
  }, {
    key: 'userDetails',
    value: function userDetails(params, callback) {
      return this.get({
        url: '/market/user:' + params.username + '.json',
      }, callback);
    },
  }, {
    key: 'userAccount',
    value: function userAccount(callback) {
      return this.get({
        url: '/market/private/user/account.json',
      }, callback);
    },
  }, {
    key: 'userBadges',
    value: function userBadges(params, callback) {
      return this.get({
        url: '/market/user-badges:' + params.username + '.json',
      }, callback);
    },
  }, {
    key: 'authorItemsBySite',
    value: function authorItemsBySite(params, callback) {
      return this.get({
        url: '/market/user-items-by-site:' + params.username + '.json',
      }, callback);
    },
  }, {
    key: 'authorFiles',
    value: function authorFiles(params, callback) {
      var username = params.username,
          site = params.site;

      return this.get({
        url: '/market/new-files-from-user:' + username + ',' + site + '.json',
      }, callback);
    },
  }, {
    key: 'authorEarningsSales',
    value: function authorEarningsSales(callback) {
      return this.get({
        url: '/market/private/user/earnings-and-sales-by-month.json',
      }, callback);
    },
  }, {
    key: 'authorStatement',
    value: function authorStatement(params, callback) {
      return this.get({
        url: '/market/user/statement',
        version: 'v3',
        params: params,
      }, callback);
    },
  },]);

  return EnvatoApi;
}();

module.exports = function (options) {
  return new EnvatoApi(options);
};
