/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * Manages data relating to the Chart of Accounts
 *
 * @param "account_id" The account UUID
 */
Client.prototype.accounts = function (account_id) {
    return new (require('./api/accounts'))(account_id, this.httpClient);
};

// Export module
module.exports = Client;
