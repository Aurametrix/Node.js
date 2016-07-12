	​var​ httpApp = express();
​ 	httpApp.get(​'*'​, ​function​ (req, res){
​ 	    res.redirect(​'https://'​ + req.headers.host + req.url);
​ 	});
​ 	httpApp.listen(80);
