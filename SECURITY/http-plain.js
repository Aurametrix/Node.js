'use strict'​;
​ 	
​ 	​var​ fs = require(​'fs'​);
​ 	​var​ https = require(​'https'​);
​ 	
​ 	​var​ options = {
​ 	    key: fs.readFileSync(__dirname + ​'/certs/key.pem'​),
​ 	    cert: fs.readFileSync(__dirname + ​'/certs/cert.pem'​)
​ 	};
​ 	
​ 	https.createServer(options, ​function​ (req, res) {
​ 	    res.writeHead(200);
​ 	    res.end(​"hello world\n"​);
​ 	}).listen(8000);
