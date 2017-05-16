// Require the sentiment-multilang module 
var sentiment = require('sentiment-multilang');
 
// Use the module to get sentiment from texts. 
var r1 = sentiment('Cats are stupid.','en');
console.dir(r1);        // Vote: 'negative' 
 
var r2 = sentiment('Cats are totally amazing!','en');
console.dir(r2);        // Vote: 'positive' 
 
var r3 = sentiment('I gatti sono stupidi.','it');
console.dir(r3);        // Vote: 'negative' 
 
var r4 = sentiment('I gatti sono totalmente stupendi!','it');
console.dir(r4);        // Vote: 'positive' -10 and 10"
}
