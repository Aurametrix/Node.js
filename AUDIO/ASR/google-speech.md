https://www.npmjs.com/package/google-speech

# install
npm install google-speech --save

Get API key: https://console.developers.google.com/

more docs: https://github.com/gillesdemey/google-speech-v2

var google_speech = require('google-speech');
 
google_speech.ASR({
    developer_key: 'XXXXXXXX',
    file: 'data/1.wav',
  }, function(err, httpResponse, xml){
    if(err){
        console.log(err);
      }else{
        console.log(httpResponse.statusCode, xml)
      }
    }
);
 
