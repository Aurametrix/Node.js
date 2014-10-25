// Ask a question.
  // Invoke the Node.js REST service. The Node.js
  // service, in turn, invokes the IBM Watson QAAPI
  // and returns to us the QAAPI response
 var ask = function(question) {  var searchTerm = $("#searchTerm");
 var samples = $('.dropDownSampleQuestion');
  // Create a Ladda reference object
 var l = Ladda.create(document.querySelector('button'));
   ......
  l.start();
   // Form a question request to send to the Node.js REST service
 var questionEntity = {
  'question' : question
  };

  // POST the question request to the Node.js REST service
  $.ajax({
  type : 'POST',
  data : questionEntity,
  dataType : "json",
  url : '/question',
  success : function(r, msg) {
  // Enable search and stop the progress indicator
  searchTerm.removeAttr("disabled");
 samples.removeAttr("disabled");
  l.stop();
   // Display answers or error
 if (r.question !== undefined) {
  displayAnswers(r);
  } else {
  alert(r);
  }
  },
  error : function(r, msg, e) {
  // Enable search and stop progress indicator
  searchTerm.removeAttr("disabled");
  samples.removeAttr("disabled");
  l.stop();
   // Display error
 if (r.responseText) {
   alert(e+' '+r.responseText);   } else {
   alert(e);
  }
   }
  });
  };
