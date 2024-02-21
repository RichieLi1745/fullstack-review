//CONTROLLERS (request handlers)
const express = require('express');
//requite our Repo here from ../database (import)
const {getAll, save} = require('../database')/*.Repo works too! */;
const getReposByUsername = require('../helpers/github');

let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.static(__dirname + '/../client/dist'))


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //Pseudo:
  //make get request to Github, using helper
  getReposByUsername(req.body.username, function(data) {
    //save repos to the database
    save(data)
      //respond with 201
      .then(()=> res.status(201).send())

  })

});
//GET REQUEST HANDLER
app.get('/repos', function (req, res) {
  getall()
    .then((data)=> { //promise-like function async
      res.send(data) //send the response data to the server
    });
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

