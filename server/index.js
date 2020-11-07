const { checkUnseenMoviesTable } = require('../database/db.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

// express.use means to use middle ware - express static serves up, __dirname is a global var
// console.log(__dirname, 'THIS IS DIRRR')
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist'))

app.get('/', function (req, res) {
    res.send('Hello world');
});

const port = 3000;
// the server (app.listen takes in a port and a call back);
var server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.get('/unseenMovies', (req, res) => {
    // this route should call checkUnseenMoviesTable then send back the result of
    // true or false if its in the table or not!
    // console.log(req, " <- this is REQUEST")
    console.log(req.body.movieData);
    const result = checkUnseenMoviesTable();
    console.log(result, `this is the result!`);
    // res(result);
})
