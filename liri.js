var keyFile = require('./keys.js'); //grabbing data from keys.js file

var Twitter = require('twitter'); 

var tweets = ''; //empty string to hold the tweets

//Grabbing the API keys from the keys.js file
var client = new Twitter(keyFile.twitterKeys);

// function myTweets(){

	var params = {screen_name: 'emilyturner88', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if(error) {
            console.log(error);
          } else {
          	console.log(tweets);
          }
          for (var i = 0; i < tweets.length; i++) {
		   	console.log(tweets[i].text);
		   	console.log(tweets[i].created_at);
}
});
          
		  
		