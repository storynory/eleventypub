const times = require("./times")
const fs = require("file-system")
const numb = 3 // / number of words to check in context

obj = []
count = 0;
for (let key in times) {

    let data = {};
    let word = (times[key].word);
    let start = (times[key].start);
    let end = (times[key].end);
    // let result = (times[key].case); // can't use case for variable name as reserved word


    const nextwords = (i, ob) => {
        let str = "";
        let count = 0;
        if ((i + (numb - 1)) < ob.length) { // if check prvents app going into infinate loop

            while (count < numb) { // the number of words that will be added to string
                str = str + ob[count + i].word + " "
                count++
            }

        }
        return str.trim().toUpperCase();


    }

    const prevwords = (i, ob) => {
        let str = "";
        let count = 0;
        if ((i - numb) > 0) { // if check prvents app going into infinate loop
            i = i + 1 - numb
            while (count < numb) { // the number of words that will be added to string
                str = str + " " + ob[i + count].word
                count++
            }

        }
        return str.trim().toUpperCase();


    }


    next = nextwords(count, times);
    previous = prevwords(count, times);
    data.word = word.toString().toUpperCase();

    data.start = start;
    data.end = end;
    data.next = next;
    data.previous = previous;
    // data.case = result; // success or failure

    obj[key] = data;

    count ++
}

// where is my data?  The out path is set for running npm run times one level up in root of projext
fs.writeFile('./src/_data/times.json', JSON.stringify(obj, null, 2), 'utf-8')
console.log("all done - written to ./src/_data/times.json'");
