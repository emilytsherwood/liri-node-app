var keyFile = require('./keys.js'); //grabbing data from keys.js file

var Twitter = require('twitter'); 

var spotify = require('spotify');

var tweets = ''; //empty string to hold the tweets

var liriSwitch;

//Grabbing the API keys from the keys.js file
var client = new Twitter(keyFile.twitterKeys);

//Function that displays the last 20 tweets of mine
// function myTweets(){
// 	var params = {screen_name: 'emilyturner88', count: 20};
//     client.get('statuses/user_timeline', params, function(error, tweets, response) {
//           if(error) {
//             console.log(error);
//           } else {
//           	console.log(tweets);
//           }
//           for (var i = 0; i < tweets.length; i++) {
// 		   	console.log(tweets[i].text);
// 		   	console.log(tweets[i].created_at);
// }
// });
// }
// myTweets();

//Spotify
function spotifySong() {
var songName = process.argv[3];
	if (songName === '');
		songName = 'The Sign';
// var queryLimit = 1;
spotify.search({type: 'track', query: songName}, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    } else {
    	console.log("The song name is: " + data.tracks.items[0].name);
    	console.log("The artist is: " + data.tracks.items[0].artists[0].name);
    	console.log("The album is: " + data.tracks.items[0].album.name); 
    	console.log("Preview link of song: " + data.tracks.items[0].preview_url);
    	//'data' is coming from the function on line 34
    }
});
// tracks.items[0].artists)
}
spotifySong();

switch (liriSwitch) {
	case 'my-tweets':
	myTweets();
	break;

	case 'spotify-this-song':
	spotifySong();
	break;
}
		