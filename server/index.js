const { checkUnseenMoviesTable } = require('../database/db.js')
const { addToSeenMoviesTable } = require('../database/db.js');
const { deleteMovieInUnseenTable } = require('../database/db.js');

const express = require('express');
const bodyParser = require("body-parser");
const app = express()

// express.use means to use middle ware - express static serves up, __dirname is a global var
// console.log(__dirname, 'THIS IS DIRRR')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist'))

const port = 3000;
// the server (app.listen takes in a port and a call back);
var server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.post('/unseenMovies', (req, res) => {
    const movieData = req.body.movie;
    
    const title = movieData.title;
    const description = movieData.overview;
    const id = movieData.id;

    const getResultQuery = (result) => {
        // console.log(`this is the result!`, result);
        res.status(200).send(result);
    }

    checkUnseenMoviesTable(title, description, id, getResultQuery);
})

app.post('/addToSeenMovies', (req, res) => {
    const movieData = req.body.movie;
    
    const title = movieData.title;
    const description = movieData.overview;
    const id = movieData.id;

    const getResultQuery = (result) => {
        // console.log(`this is the result!`, result);
        res.status(200).send(result);
    }

    addToSeenMoviesTable(title, description, id, getResultQuery);
})

app.post(`/deleteUnseenMovie`, (req, res) => {
    const movieData = req.body.movie;
    
    const title = movieData.title;
    const description = movieData.overview;
    const id = movieData.id;

    const getResultQuery = (result) => {
        // console.log(`this is the result!`, result);
        res.status(200).send(result);
    }
    
    deleteMovieInUnseenTable(title, description, id, getResultQuery);
})
