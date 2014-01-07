var Client = require('./commonLedger/client');

// Export module
var commonLedger = module.exports;

/**
 * This file contains the global namespace for the module
 */
commonLedger.client = function(auth, options) {
  return new Client(auth, options);
};
