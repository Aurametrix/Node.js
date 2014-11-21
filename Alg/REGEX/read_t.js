/ same as what you have
file.open("r");
var str = file.read();
file.close();
var array = str.split(/[\r\n]+/);
 
 
// "pairs" is the look-up table
 
var pairs = {};
// as before, "myPlaceList" will be used for the dropdown
var myPlaceList = [];
 
 
 
var v;
for (var i = 0; i < array.length; i++)
  {
  v = array[i].split ("\t");
  pairs [v[0]] = v[1];
  myPlaceList.push (v[0]);
  }
 
 
// add the dropdown as before:

var myPlaceMenu = dropdowns.add({stringList:myPlaceList, selectedIndex:0});
 
 
// the look-up table "pairs" is used as follows: pairs ["value1"] returns "value2"
// so in your script that would be:
 
 
var myPlace = pairs [myPlaceList[myPlaceMenu.selectedIndex]];
