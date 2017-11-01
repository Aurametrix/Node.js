function query() {
  var 
    // HN is done with very unsemantic classes.
    job_list = Array.prototype.slice.call(document.querySelectorAll('.c5a,.cae,.c00,.c9c,.cdd,.c73,.c88')),
    query_list = Array.prototype.slice.call(arguments),
    shown = 0, total = job_list.length;
    
  // Traverses up the dom stack trying to find a match of a specific class
  function up_to(node, klass) {
    if (node.classList.contains(klass)) {
      return node;
    } 
    if(node === document.body) {
      throw new Exception();
    }
    return up_to(node.parentNode, klass);
  }

  function display(node, what) {
    up_to(node, 'athing').style.display = what;
  }
  
  // If we have a RegEx, return it
  // Otherwise make it a case insensitive regex.
  function destring(what) {
    return what.test ? what : new RegExp(what.toString(), 'i');
  }
  
  // Hide all the postings
  job_list.forEach(function(node) {
    display(node, 'none');
  });
  
  query_list.forEach(function(query) {
    if (query.forEach) {
      var and_query_list = query.map(destring);

      job_list.forEach(function(node) {
        var 
          doesMatch = true, 
          toTest = node.innerHTML;
          
        and_query_list.forEach(function(query) {
          doesMatch &= toTest.search(query) > -1;
        })
        
        if(doesMatch) {
          display(node, 'block');
          shown ++;
        }
      });

    } else {
      query = destring(query);

      job_list.forEach(function(node) {
        if(node.innerHTML.search(query) > -1) {
          display(node, 'block');
          shown ++;
        }
      });
    }
  });
  
  return {shown: shown, total: total}
}
