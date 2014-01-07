/**
 * Collection of different tax rates and their codes
 *
 * @param "tax_id" The tax UUID
 */
var Tax = function(tax_id, client) {
  this.tax_id = tax_id;
  this.client = client;

  return this;
};

/**
 * Add a new tax rate
 * '/core.tax/add' POST
 *
 * @param "organisation_id" The UUID of the organisation this tax rate belongs to
 * @param "name" The name of this tax rate
 * @param "type" The tax type (tax code)
 * @param "display_rate" The rate to display this tax at
 * @param "effective_rate" The rate that gets applied for this tax
 */
Tax.prototype.add = function (organisation_id, name, type, display_rate, effective_rate, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['organisation_id'] = organisation_id;
  body['name'] = name;
  body['type'] = type;
  body['display_rate'] = display_rate;
  body['effective_rate'] = effective_rate;

  this.client.post('/core.tax/add', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * View a tax rate
 * '/core.tax/view/:tax_id' GET
 *
 */
Tax.prototype.view = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/core.tax/view/' + this.tax_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Update an existing tax rate
 * '/core.tax/update/:tax_id' POST
 *
 * @param "organisation_id" The UUID of the organisation this tax rate belongs to
 * @param "name" The name of this tax rate
 * @param "type" The tax type (tax code)
 * @param "display_rate" The rate to display this tax at
 * @param "effective_rate" The rate that gets applied for this tax
 */
Tax.prototype.update = function (organisation_id, name, type, display_rate, effective_rate, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['organisation_id'] = organisation_id;
  body['name'] = name;
  body['type'] = type;
  body['display_rate'] = display_rate;
  body['effective_rate'] = effective_rate;

  this.client.post('/core.tax/update/' + this.tax_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Tax
