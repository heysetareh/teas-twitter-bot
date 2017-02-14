var fs = require('fs');
var teasFileData = fs.readFileSync("teas.json");
var teasData = JSON.parse(teasFileData);
var teasData = JSON.parse(fs.readFileSync("teas.json"))
var teas = teasData["teas"];
var twitterAPI = require('node-twitter-api');


var counterBuffer = fs.readFileSync("counter.txt");
var counter = counterBuffer.toString();
counter
var counterInt = parseInt(counter)
counterInt++;
var counterString = counterInt.toString();
fs.writeFileSync("counter.txt", counterString, "utf8");
var counter = parseInt(fs.readFileSync("counter.txt").toString());
console.log(counter);
counter++;
fs.writeFileSync("counter.txt", counter.toString(), "utf8");


var twitterAPI = require('node-twitter-api');
var util = require('util');
var fs = require('fs');

var consumerKey = "aUWlQbIQyPVs449QkCepF3w62";
var consumerSecret = "Z51XFeQrmaA7kkXhZcLAngEnzFGS4110PUwfz1WyKsu56hKEd4";
var accessToken = "830537101015937025-apfxMZQrSZ1Q4sHD31smJViL88r5HZs";
var tokenSecret = "76atpZWLKg6jnJLyafP4FfXsRBF5zD89m2dyYkcWhHKWW";

var twitter = new twitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret});

var teasData = JSON.parse(fs.readFileSync("teas.json"));
var teas = teasData["teas"];

var counter = parseInt(fs.readFileSync("counter.txt").toString());

twitter.statuses("update",
    {"status": teas[counter]},
    accessToken,
    tokenSecret,
    function(error, data, response) {
        if (error) {
            console.log("something went wrong: " + util.inspect(error));
        }
    }
);

counter++;
fs.writeFileSync("counter.txt", counter.toString(), "utf8");