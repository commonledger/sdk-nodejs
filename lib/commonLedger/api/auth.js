/**
 * Using OAuth 2.0 to connect to Common Ledger
 *
 */
var Auth = function(client) {
  this.client = client;

  return this;
};

/**
 * After redirecting to /auth/authorise this endpoint will return an access token
 * '/auth/token' POST
 *
 * @param "client_id" The application client_id
 * @param "client_secret" The application client_secret
 * @param "code" The code from the authorise request
 * @param "redirect_url" The redirect_uri used to set up the application
 * @param "grant_type" Either 'authorization_code' when requesting an access token, or 'refresh_token' when refreshing an old access token
 */
Auth.prototype.token = function (client_id, client_secret, code, redirect_url, grant_type, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['client_id'] = client_id;
  body['client_secret'] = client_secret;
  body['code'] = code;
  body['redirect_url'] = redirect_url;
  body['grant_type'] = grant_type;

  this.client.post('/auth/token', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Auth
