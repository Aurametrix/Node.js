<script data-main="main" src="lib/require.js"></script></body>

requirejs(['lib/jschema'], function(jSchema){
  var s = new jSchema;

  s.add([{a:1, b:2}])
  s.add([{b:2, c:3}], {name:"named_table", primaryKey:"b"})
});
