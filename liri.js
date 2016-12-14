var keyFile = require('./keys.js'); //grabbing data from keys.js file

var Twitter = require('twitter'); 

var tweets = ''; //empty string to hold the tweets

//Grabbing the API keys from the keys.js file
var client = new Twitter(keyFile.twitterKeys);

// function myTweets(){

	var params = {screen_name: 'emilyturner88'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if(error) {
            console.log(error);
          } else {
          	console.log(tweets);
          }

            // console.log(tweets); 
            // console.log(response);   
});

		  	// for (var i = 0; i < tweets.length; i++) {
		  	// 	console.log(tweets[i]);
		  	// }
		  	// console.log(error);
		  
		 


		  	
			// for (var i = 0; i < tweets.length; i++) {
		 //  	console.log(tweets[i]);
// }
// myTweets();


// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// }); 

//part of the twitter node documentation