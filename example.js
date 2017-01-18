// https://github.com/shernshiou/node-uber
// https://build.envato.com/api/#market_Account
//
const envato = require('./index');

const getResult = envato({
  username: 'teamfox',
  token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
});

// getResult.totalItems(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.totalUsers(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.userUsername(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.userEmail(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.userAccount(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.userBadges({
//   username: 'teamfox',
// }, function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.authorItemsBySite({
//   username: 'teamfox',
// }, function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.authorFiles({
//   username: 'teamfox',
//   site: 'ThemeForest',
// }, function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.authorEarningsSales(function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.authorStatement({}, function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });

// getResult.authorStatement({
//   page: 1,
//   from_date: '2017-01-15',
//   to_date: '2017-01-17',
//   type: 'Sale', // Sale || Author Fee,
//   site: 'themeforest.net', // themeforest.net || codecanyon.net
// }, function (err, data) {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });
