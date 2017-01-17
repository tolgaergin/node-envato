// https://github.com/shernshiou/node-uber
// https://build.envato.com/api/#market_Account
//
const envato = require('./index');

const getResult = envato({
  username: 'teamfox',
  token: '7S3QE0NGJUr9MwJaLLo0usgjSrS85yLm',
});

getResult.totalItems()
  .then(result => console.log(result));

getResult.account()
  .then(result => console.log(result));

// with callback
// getResult.totalItems((err, data) => {
//   if (err) { return console.log(err); }
//
//   console.log(data);
// });
