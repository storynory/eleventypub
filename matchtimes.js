let times = require("./src/_data/times")

let smil = {}

let matchtimes = (times, str) => {

    let i;
    for (i = 0; i < times.length; i++) {
        if (times[i].next == str) {
            smil.start = times[i].start
        }

        if (times[i].previous == str) {
            smil.end = times[i].end
        }


        return smil;

    }
}


module.exports = {


    eleventyComputed: {
        matchtimes: matchtimes(times, str)


    }


}
