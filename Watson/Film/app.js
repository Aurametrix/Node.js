// Get access to our Watson module
var watson = require('./watson/watson');
// Set up RESTful resources
// POST requests to /question are handled by 'watson.question'
app.post('/question', watson.question);

// Start the http server
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
