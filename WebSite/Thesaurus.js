function search() {
    try {
        var value = $('#input').val();
        var url = "http://words.bighugelabs.com/api/2/<API KEY GOES HERE!>/" + value + "/json";
        var ajaxSettings = {
            type: "GET",
            url: url,
            success: function (results) {
                var parsedResults = JSON.parse(results);
                var html = formatResults(parsedResults);
                $("#results").html(html);
            },
            error: function (serverErr) {
                var err = new Error("Error " + serverErr.status + ":" + serverErr.statusText);
                // log error
            }
        };
        $.ajax(ajaxSettings);
    }
    catch (err) {
        // log error
    }
}

function formatResults(results) {
    var output = '';
    if (results.adjective) {
        output += "Adjective:<br>";
        if (results.adjective.syn) {
            for (var i = 0; i < results.adjective.syn.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Synonym: " + results.adjective.syn[i] + "<br>";
            }
        }
        if (results.adjective.ant) {
            for (i = 0; i < results.adjective.ant.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Antonym: " + results.adjective.ant[i] + "<br>";
            }
        }
        if (results.adjective.rel) {
            for (i = 0; i < results.adjective.rel.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Related: " + results.adjective.rel[i] + "<br>";
            }
        }
    }
    if (results.noun) {
        output += "Noun:<br>";
        if (results.noun.syn) {
            for (i = 0; i < results.noun.syn.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Synonym: " + results.noun.syn[i] + "<br>";
            }
        }
        if (results.noun.ant) {
            for (i = 0; i < results.noun.ant.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Antonym: " + results.noun.ant[i] + "<br>";
            }
        }
        if (results.noun.rel) {
            for (i = 0; i < results.noun.rel.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Related: " + results.noun.rel[i] + "<br>";
            }
        }
    }
    if (results.verb) {
        output += "Verb:<br>";
        if (results.noun.syn) {
            for (i = 0; i < results.verb.syn.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Synonym: " + results.verb.syn[i] + "<br>";
            }
        }
        if (results.noun.ant) {
            for (i = 0; i < results.verb.ant.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Antonym: " + results.verb.ant[i] + "<br>";
            }
        }
        if (results.noun.rel) {
            for (i = 0; i < results.verb.rel.length; i++) {
                output += "&nbsp;&nbsp;&nbsp;Related: " + results.verb.rel[i] + "<br>";
            }
        }
    }
    return output;
}