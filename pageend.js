module.exports = (content) => {


    text = content.trim().replace(/(<.*?>)/ig, "").replace(/\b[^A-Za-z\d£$€&]+\B|\B[^A-Za-z\d£$€&]+\b/g, " ").replace(" -", "").replace(/\*/g, "").replace(" ...", "").replace(/[ ]{2,}/gi, " ").toUpperCase().trim();


    end = text.split(' ').slice(-3).join(' ').trim();
    return end;

}
