app.use(​function​ (req, res, next) {
​ 	    ​var​ aYear = 60 * 60 * 24 * 365;
​ 	    ​// Set the Strict Transport Security header for a year​
​ 	    ​// Also include subdomains​
​ 	    res.set(​'Strict-Transport-Security'​,
​ 	      ​'max-age='​ + aYear + ​';includeSubdomains'​);
​ 	
​ 	    next();
​ 	});
