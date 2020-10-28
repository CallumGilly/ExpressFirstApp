//inital build: docker build -t webdev .
//to run with code updates: docker run -itv "$(pwd):/app" --rm -p 3000:3000 webdev
//If it breaks add 'winpty' before the command

//Informs the user that index.js is starting
console.log("Starting up index...");

//Creates app and adds router
const express = require('express');
var app = express();
const router = express.Router();
//Sets app variable 'port' to be that of the systems
//default or 3000 should there not be a system default
app.set('port', process.env.PORT || 3000);

//Root branch
router.get('/', (req,res) => {
  res.sendFile(__dirname + '/testpage.html');
});

//Basic test to see if the server is working
router.get('/Test', (req,res) => {
  res.send('<h1>Web app is working</h1>');
});

//Set the app to use router then listen before stating that we are listning
app.use('/', router);
app.listen(app.get('port'));

console.log("Listening on port " + app.get('port'));
