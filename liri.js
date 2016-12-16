var keyFile = require('./keys.js'); //grabbing data from keys.js file

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var tweets = ''; //empty string to hold the tweets

var liriSwitch = process.argv[2];

//Grabbing the API keys from the keys.js file
var client = new Twitter(keyFile.twitterKeys);

//Function that displays the last 20 tweets of mine
function myTweets() {
    var params = {
        screen_name: 'emilyturner88',
        count: 20
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(tweets);
        }
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
        }
    });
}


//Spotify
function spotifySong() {
    var songName = process.argv[3]; //user has to type in song name
    // if (songName === '');
    // songName = 'The Sign';

    spotify.search({
        type: 'track',
        query: songName
    }, function(err, data) {
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

}

//Movies/OMDB
function movieThis() {
    var movieName = process.argv[3]; //user has to type in movie name

    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json&tomatoes=true', function(error, response, body) {
        if (!error && response.statusCode == 200) {
        }  
        var movies = JSON.parse(body);
      //    if (movies.Title === undefined);{
    		// movies.Title = 'Mr. Nobody';
        console.log("Title: " + movies.Title);
        console.log("Year: " + movies.Year);
        console.log("IMDB Rating: " + movies.imdbRating);
        console.log("Country: " + movies.Country);
        console.log("Language: " + movies.Language);
        console.log("Plot: " + movies.Plot);
        console.log("Actors: " + movies.Actors);
        console.log("Rotten Tomato Rating: " + movies.tomatoUserRating);
        console.log("Rotton Tomato Link: " + movies.tomatoURL);
       });
    }    




switch (liriSwitch) {
    case 'my-tweets':
        myTweets();
        break;

    case 'spotify-this-song':
        spotifySong();
        break;

    case 'movie-this':
        movieThis();
        break;
}
		