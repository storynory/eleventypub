const helpers = [];

helpers.dateNow = new Date().toISOString().split('.')[0] + "Z";
helpers.striptags = (content) => {

    text = content.replace(/(<.*?>)/ig, "").replace(/\b[^A-Za-z\d£$€&]+\B|\B[^A-Za-z\d£$€&]+\b/g, " ").replace(" -", "").replace(/\*/g, "").replace(" ...", "").toUpperCase();

    return text

}


module.exports = helpers;
