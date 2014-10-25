// Describe the Watson Endpoint
// Specify the information and credentials pertinent to your Watson instance
var endpoint = {
  // enter watson host name; for example: 'http://www.myhost.com'
  host : '',
   // enter watson instance name; for example: '/deepqa/v1/question'
  instance : '',
   // enter auth info; for example: 'Basic c29tZXVzZXJpZDpzb21lcGFzc3dvcmQ='
  auth : ''
};


// Handler for /question POST requests
// Submits a question to Watson via the IBM Watson QAAPI
// and returns the QAAPI response.
exports.question = function(req, res) {
 if (!endpoint.host) {
  res.send(404, 'Watson host information not supplied.');
  }
 var uri = endpoint.host + endpoint.instance;
 var request = require("request");
   // Form a proper Watson QAAPI request
 var questionEntity = {
  "question" : {
  "evidenceRequest" : { // Ask Watson to return evidence
  "items" : 5 // Ask for five answers with evidence
  },
  "questionText" : req.body.question // The question
  }
  };

  console.log('Ask Watson: ' + req.body.question + ' @ ' + uri);

  // Invoke the IBM Watson QAAPI Synchronously
  // POST the questionEntity and handle the QAAPI response
  request({
  'uri' : uri,
  'method' : "POST",
  'headers' : {
  'Content-Type' : 'application/json;charset=utf-8',
  'X-SyncTimeout' : 30,
  'Authorization' : endpoint.auth
  },
  'json' : questionEntity,

  }, function(error, response, body) {
  // Return the QAAPI response in the entity body
  res.json(body);
  });
}
