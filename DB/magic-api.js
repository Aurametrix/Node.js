var blockspring = require('blockspring');

blockspring.define(function(request, response) {
    var min_cost = request.params["min_mana_cost"];
    var max_cost = request.params["max_mana_cost"];
    
    var whereClause = "WHERE K >= " + min_cost + " AND K <= " + max_cost + " ";
    
    var card_name = request.params["card_name"];
    if (card_name) {
    	whereClause += " AND E MATCHES '(?i).*" + card_name + ".*' ";    
    }
    
    var color = request.params["color"]
    if (color) {
    	whereClause += " AND I MATCHES '(?i).*" + color + ".*' ";   
    }
    
    var primary_type  = request.params["primary_type"];
    if (primary_type ) {
    	whereClause += " AND M MATCHES '(?i).*" + primary_type  + ".*' ";    
    }
    
    var sub_type = request.params["sub_type"];
    if (sub_type) {
    	whereClause += " AND N MATCHES '(?i).*" + sub_type + ".*' ";    
    }
    
    var min_power = request.params["min_power"];
    if (min_power) {
    	whereClause += " AND O > " + min_power + " ";    
    }
    
    var max_power = request.params["max_power"];
    if (max_power) {
    	whereClause += " AND O < " + max_power + " ";    
    }
    
    var min_toughness = request.params["min_toughness"];
    if (min_toughness) {
    	whereClause += " AND P > " + min_toughness + " ";    
    }
    
    var max_toughness = request.params["max_toughness"];
    if (max_toughness) {
    	whereClause += " AND P < " + max_toughness + " ";    
    }
    
    var rarity = request.params["rarity"];
    if (rarity) {
    	whereClause += " AND R CONTAINS '" + rarity + "' ";    
    }
    
    var multiverse_id = request.params["multiverse_id"];
    if (multiverse_id) {
    	whereClause += " AND B = " + multiverse_id + " ";    
    }
    
    var query = "SELECT A, B, D, E, F, G, K, I, M, N " + whereClause;
  
    blockspring.runParsed("query-google-spreadsheet", { 
        "query": query,
        "url": "https://docs.google.com/spreadsheets/d/11JYfkdJu2DNf1FLdvd4tlkzRklE1_c4lsxS_peHpXkA/edit#gid=1504627451" 
    }, { cache: true, expiry: 7200}, function(res) {
  		response.addOutput('cards', res.params.data);
        response.end();
	});
	
});
