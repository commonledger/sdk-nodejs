# sdk-node

Official CommonLedger API library client for node.js

__This library is generated by [alpaca](https://github.com/pksunkara/alpaca)__

## Installation

Make sure you have [npm](https://npmjs.org) installed.

```bash
$ npm install commonledger-sdk
```

#### Versions

Works with [ 0.8 / 0.9 / 0.10 / 0.11 ]

## Usage

```js
var common_ledger = require('commonledger-sdk');

// Then we instantiate a client (as shown below)
```

### Build a client

##### Without any authentication

```js
var client = common_ledger.client();

// If you need to send options
var client = common_ledger.client({}, options);
```

##### Basic authentication

```js
var client = common_ledger.client({
    username: 'pksunkara',
    password: 'password'
}, options);
```

##### Oauth acess token

```js
var client = common_ledger.client('1a2b3', options);
```

##### Oauth client secret

```js
var client = common_ledger.client({
    client_id: '09a8b7',
    client_secret: '1a2b3'
}, options);
```

### Response information

__All the callbacks provided to an api call will recieve the response as shown below__

```js
client.klass('args').method('args', function (err, response) {
    if (err) console.log(err);

    response.body;
    // >>> 'Hello world!'

    response.code;
    // >>> 200

    response.headers;
    // >>> {'content-type': 'text/html'}
}
```

##### HTML response

```js
response.body;
// >>> 'The username is pksunkara!'
```

##### JSON response

```js
response.body;
// >>> {'user': 'pksunkara'}
```

### Request body information

##### RAW request

```js
body = 'username=pksunkara';
```

##### FORM request

```js
body = {'user': 'pksunkara'};
```

##### JSON request

```js
body = {'user': 'pksunkara'};
```

### Client Options

The following options are available while instantiating a client:

 * __base__: Base url for the api
 * __api_version__: Default version of the api (to be used in url)
 * __user_agent__: Default user-agent for all requests
 * __headers__: Default headers for all requests
 * __request_type__: Default format of the request body

### Method Options

The following options are available while calling a method of an api:

 * __api_version__: Version of the api (to be used in url)
 * __headers__: Headers for the request
 * __query__: Query parameters for the url
 * __body__: Body of the request
 * __request_type__: Format of the request body

### Accounts api

Manages data relating to the Chart of Accounts

The following arguments are required:

 * __account_id__: The account UUID

```js
var accounts = client.accounts("75e6a24c-772b-11e3-8005-6163636f756e");
```

##### Add account (POST /core.account/add)

Creates a new account in the chart of accounts

The following arguments are required:

 * __organisation_id__: The organisation the account belongs to
 * __account_number__: The account code
 * __name__: The account name
 * __classification__: The account classification
 * __type__: The type of classification for the account
 * __tax__: The tax code that applies to the account
 * __currency__: The currency code that applies to the account

```js
accounts.add("863f2548-7284-11e3-9710-6163636f756e", "200", "Business Tax Account 1", "ASSET", "BANK", "NONE", "NZD", options, callback);
```

##### View account (GET /core.account/view/:account_id)





```js
accounts.view(options, callback);
```

##### Update account (POST /core.account/update/:account_id)

Updates an existing account in the chart of accounts

The following arguments are required:

 * __organisation_id__: The organisation the account belongs to
 * __account_number__: The account code
 * __name__: The account name
 * __classification__: The account classification
 * __type__: The type of classification for the account
 * __tax__: The tax code that applies to the account
 * __currency__: The currency code that applies to the account

```js
accounts.update("863f2548-7284-11e3-9710-6163636f756e", "200", "Business Tax Account 1", "ASSET", "BANK", "NONE", "NZD", options, callback);
```

##### Delete account (GET /core.account/delete/:account_id)

Deletes an account from the chart of accounts



```js
accounts.delete(options, callback);
```

## Contributors
Here is a list of [Contributors]((https://github.org/commonledger/sdk-node/contributors)

### TODO

## License
MIT

## Bug Reports
Report [here](https://github.org/commonledger/sdk-node/issues).

## Contact
Patrick Hindmarsh (patrick@hindmar.sh)
