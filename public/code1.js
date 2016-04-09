// Include the necessary modules.
var sys = require( "sys" );
var http = require( "http" );


// ---------------------------------------------------------- //
// ---------------------------------------------------------- //


// Create an instance of the HTTP server.
var server = http.createServer(
	function( request, response ){

		// We are going to be looking at urls for RESTful commands.
		// These will be in the form of:
		//
		// girls/get
		// girls/{id}/get
		// girls/{id}/delete
		// girls/add/{name}

		// Set our default response.
		var apiResponse = null;

		// Define our patterns.
		var patterns = {
			getAll: new RegExp( "girls/get", "i" ),
			getGirl: new RegExp( "girls/(\\d+)/get", "i" ),
			deleteGirl: new RegExp( "girls/(\\d+)/delete", "i" ),
			addGirl: new RegExp( "girls/add/([^/]+)", "i" )
		};

		// Strip off the leading and trailing slashes.
		var restUri = request.url.replace(
			new RegExp( "^/|/$", "g" ),
			""
		);

		// Loop over the patterns to see if any match.
		for (patternKey in patterns){

			// Try to match the pattern against the URL.
			if ( match = restUri.match( patterns[ patternKey ] ) ){

				// Pass the request off to the service layer.
				apiResponse = girlService[ patternKey ](
					match[ 1 ]
				);

				// The RESTful URL can only match one pattern.
				// Since we found a match, break out of the loop.
				break;

			}

		}

		// For our demo puproses, our API will always return a valid
		// response if the API request was successful. Otherwise,
		// something could not be found.
		if (apiResponse){

			// Set the 200-OK header.
			response.sendHeader( 200 );

			// Return the response from the API request.
			response.write( JSON.stringify( apiResponse ) );

		} else {

			// Something went wrong.
			response.sendHeader( 404 );

		}

		// Close the response.
		response.close();

	}
);

// Point the server to listen to the given port for incoming
// requests.
server.listen( 8080 );


// ---------------------------------------------------------- //
// ---------------------------------------------------------- //


// I am the service object (or Data Access Object or Gateway) that
// provides access to the girls collection.
var girlService = (function(){


	// Create our collection of girls. This collection is keyed by
	// the ID of the girl.
	var girls = {};

	// Keep a running auto-incrementer.
	var primaryKey = 0;


	// Define our service object.
	var service = {

		// I add a girl to the collection.
		addGirl: function( name ){
			// Create the new girl instance.
			var girl = {
				id: ++primaryKey,
				name: name
			};

			// Add it to the collection.
			girls[ girl.id ] = girl;

			// Return the new girl instance.
			return( girl );
		},


		// I delete the girl with the given ID.
		deleteGirl: function( id ){
			// Get the girl.
			var girl = this.getGirl( id );

			// If the girl exists, delete her.
			if (girl){

				delete girls[ girl.id ];

			}

			// Return the girl.
			return( girl );
		},


		// I return the girl with the given id.
		getGirl: function( id ){
			return( girls[ id ] || null);
		},


		// I get all the girls.
		getAll: function(){
			var orderedGirls = [];

			// Loop over the primary keys to build up the collection
			// of ordered girls.
			for ( var i = 1 ; i <= primaryKey ; i++ ){

				// Check to see if a girl exists at this key.
				if (girls[ i ]){

					// Add this girl to the result in order.
					orderedGirls.push( girls[ i ] );

				}

			}

			// Return the sorted collection.
			return( orderedGirls );
		}

	};


	// Return the initialized service object.
	return( service );


})();


// ---------------------------------------------------------- //
// ---------------------------------------------------------- //


// Write debugging information to the console to indicate that
// the server has been configured and is up and running.
sys.puts( "Server is running on 8080" );
