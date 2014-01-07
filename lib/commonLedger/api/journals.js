/**
 * Manages journal entries and journal lines
 *
 * @param "journal_id" The journal entry UUID
 */
var Journals = function(journal_id, client) {
  this.journal_id = journal_id;
  this.client = client;

  return this;
};

/**
 * Add a new journal entry
 * '/core.journal/add' POST
 *
 * @param "organisation_id" The UUID of the organisation this journal entry belongs to
 * @param "journal_number" The journal number this journal entry belongs to
 * @param "journal_type" The type of journal entry this is
 * @param "datetime" The timestamp this journal entry was recorded
 * @param "notes" Any notes this journal entry has
 * @param "lines" An array of journal lines that make up this journal entry
 */
Journals.prototype.add = function (organisation_id, journal_number, journal_type, datetime, notes, lines, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['organisation_id'] = organisation_id;
  body['journal_number'] = journal_number;
  body['journal_type'] = journal_type;
  body['datetime'] = datetime;
  body['notes'] = notes;
  body['lines'] = lines;

  this.client.post('/core.journal/add', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * View a journal entry
 * '/core.journal/view/:journal_id' GET
 *
 */
Journals.prototype.view = function (options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['query'] ? options['query'] : {});

  this.client.get('/core.journal/view/' + this.journal_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

/**
 * Add a new journal entry
 * '/core.journal/update/:journal_id' POST
 *
 * @param "organisation_id" The UUID of the organisation this journal entry belongs to
 * @param "journal_number" The journal number this journal entry belongs to
 * @param "journal_type" The type of journal entry this is
 * @param "datetime" The timestamp this journal entry was recorded
 * @param "notes" Any notes this journal entry has
 * @param "lines" An array of journal lines that make up this journal entry
 */
Journals.prototype.update = function (organisation_id, journal_number, journal_type, datetime, notes, lines, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  var body = (options['body'] ? options['body'] : {});
  body['organisation_id'] = organisation_id;
  body['journal_number'] = journal_number;
  body['journal_type'] = journal_type;
  body['datetime'] = datetime;
  body['notes'] = notes;
  body['lines'] = lines;

  this.client.post('/core.journal/update/' + this.journal_id + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Journals
