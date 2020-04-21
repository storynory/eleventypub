module.exports = (content) => {


    text = content.trim().replace(/(<.*?>)/ig, "").replace(/\b[^A-Za-z\d£$€&]+\B|\B[^A-Za-z\d£$€&]+\b/g, " ").replace(" -", "").replace(/\*/g, "").replace(" ...", "").replace(/[ ]{2,}/gi, " ").toUpperCase().trim();


    start = text.split(' ').slice(0, 4).join(' ').trim();

    return start


}
