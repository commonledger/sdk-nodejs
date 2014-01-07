/**
 * Manages data relating to the Chart of Accounts
 *
 * @param "account_id" The account UUID
 */
var Accounts = function(account_id, client) {
  this.account_id = account_id;
  this.client = client;

  return this;
};

/**
 * Creates a new account in the chart of accounts
 * '/core.account/add' POST
 *
 * @param "organisation_id" The organisation the account belongs to
 * @param "account_number" The account code
 * @param "name" The account name
 * @param "classification" The account classification
 * @param "type" The type of classification for the account
 * @param "tax" The tax code that applies to the account
 * @param "currency" The currency code that applies to the account
 */
Accounts.prototype.add = function (organisation_id, account_number, name, classification, type, tax, currency, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['organisation_id'] = organisation_id;
  body['account_number'] = account_number;
  body['name'] = name;
  body['classification'] = classification;
  body['type'] = type;
  body['tax'] = tax;
  body['currency'] = currency;

  this.client.post('/core.account/add', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * 
 * '/core.account/view/:account_id' GET
 *
 */
Accounts.prototype.view = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/core.account/view/' + this.account_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Accounts
