BM25.Tokenize = function(text) {
    text = text
        .toLowerCase()
        .replace(/\W/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .split(' ')
        .map(function(a) { return stemmer(a); });

    // Filter out stopStems
    var out = [];
    for (var i = 0, len = text.length; i &lt; len; i++) {
        if (stopStems.indexOf(text[i]) === -1) {
            out.push(text[i]);
        }
    }

    return out;
};
