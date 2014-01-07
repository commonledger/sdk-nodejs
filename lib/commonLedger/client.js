/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  return this;
};

/**
 * Using OAuth 2.0 to connect to Common Ledger
 *
 */
Client.prototype.auth = function () {
    return new (require('./api/auth'))(this.httpClient);
};

/**
 * Manages data relating to the Chart of Accounts
 *
 * @param "account_id" The account UUID
 */
Client.prototype.accounts = function (account_id) {
    return new (require('./api/accounts'))(account_id, this.httpClient);
};

/**
 * Collection of different tax rates and their codes
 *
 * @param "tax_id" The tax UUID
 */
Client.prototype.tax = function (tax_id) {
    return new (require('./api/tax'))(tax_id, this.httpClient);
};

/**
 * Manages journal entries and journal lines
 *
 * @param "journal_id" The journal entry UUID
 */
Client.prototype.journals = function (journal_id) {
    return new (require('./api/journals'))(journal_id, this.httpClient);
};

// Export module
module.exports = Client;
