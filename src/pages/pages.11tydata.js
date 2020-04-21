let times = require("../_data/times")

let smil = {}

let matchtimes = (times, str) => {

    let i;
    for (i = 0; i < times.length; i++) {
        if (times[i].next == str) {
            smil.start = times[i].start
        }

        return smil.start;

    }
}


module.exports = {


    eleventyComputed: {
        matchtimes: matchtimes(times, "THE GRASSHOPPER AND")


    }


}
