Envato Node.js Wrapper
=========
This projects helps you to make HTTP requests to the Envato API.

Installation
------------
Before you begin, you need to get your personal token in the [Manage your apps](https://build.envato.com/create-token/).

After getting your personal token, you need to install this module in your Node.js project:

```sh
npm install node-envato
```

Initialization
-----
In order to use this module, you have to import it in your application first:

```javasctipt
const envato = require('./index');

const getResult = envato({
  username: 'YOUR_USERNAME',
  token: 'YOUR_TOKEN_CODE',
});
```
