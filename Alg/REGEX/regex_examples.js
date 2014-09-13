

/**
 * Regex objects
 *
 */

var patt = new RegExp(pattern,modifiers);
// or more simply:
var patt = /pattern/modifiers;

<script type="text/javascript">

var	str = "Hello World!";
var res = str.replace(/world/i, "W3Schools");

var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);


var str="Hello world!";
 //look for "Hello"
 var patt=/Hello/g;
 var result=patt.test(str);
 document.write("Returned value: " + result);  
</script>
