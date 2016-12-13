var keyFile = require('./keys.js'); //grabbing data from keys.js file

var nodeArgs = process.argv; //takes in command line arguments

var twitter = require('twitter'); 

var tweets = ''; //empty strint to hold the tweets



// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// }); 

//part of the twitter node documentation