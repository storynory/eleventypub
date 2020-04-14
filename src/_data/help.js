const helpers = [];

helpers.dateNow = new Date().toISOString().split('.')[0] + "Z";


module.exports = helpers;