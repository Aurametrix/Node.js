// if you don't specify a html file, the sniper will generate a div

var rnaViewer = require("biojs-vis-rnasequences");

function callback() {
	//path to rna text file
	rnaViewer("https://cdn.rawgit.com/amarat/biojs-vis-rnasequences/master/resources/RNA_seq.txt");
}

$(document).ready(callback);
