
var cheerio = require("cheerio") // cheerio makes a virtual dom and allows us to traverse it with jquery type syntax


module.exports = (content) => {

    $ = cheerio.load(content, {
        normalizeWhitespace: true,
        xmlMode: true,
        decodeEntities: false
    });

    var string = ""

    var sp = $("#split").contents()  // words to be split are wrapped in #split id
    var id = 0;  // counter to make unique ids



    var createSpan = function (text, className, callback) {
        var span = $('<span/>');
        span.append(text);
        span.className = className;
        return callback(span)
    }




    var makespans = function (string, callback) {   // function that wraps words in unique spans
        var result = "";
        // only safe to do regex here if we know it is a text string
        var word = /(?!-)(?!')([A-z0-9-’'^<>/]+)/g;
        var spans = string.replace(word, function (a) {
            return '<span id="' + (++id) + '">' + a + '</span>'
        });
        return callback(spans);
    }

    var decodehtml = function (str) {


    }



    var spanner = function (el) {
        $(el).contents().each(function () {
            if (this.nodeType == 3) {  // is a text node so make a span
                var that = this;
                var text = $(this).text();
                makespans(text, function (result) {

                    $(that).replaceWith(result)

                })


            }

            else {   // not a text node so continue on way 
                spanner($(this))  // call self
            }



        })

    }

    spanner("#split")

    return $.html()
}