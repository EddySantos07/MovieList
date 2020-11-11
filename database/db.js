// const { query } = require('express');
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0108",
});

const DB_Name = "Movie_List_Test_1";

connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected to mysql!");

  const queryDB_If_Exists = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${DB_Name}';`;

  const Check_If_DB_Exists = `SHOW DATABASES LIKE '${DB_Name}';`;

  const createDB = `CREATE DATABASE ${DB_Name}`;

  const useDB = `USE ${DB_Name}`;

  //   connection.query(Check_If_DB_Exists, (err, result) => {});
  connection.query(queryDB_If_Exists, (err, result) => {
    // console.log("step 1) we check if db EXISTS");
    if (err) {
      console.log(err);
    }

    // console.log(result, "step 2) get the result if it exists or not");

    if (result.length === 0) {
      const seenMoviesTable = `CREATE TABLE seen_movies ( 
        id int UNIQUE, 
        name CHAR(200), 
        description VARCHAR (999)
      );`;

      const unseenMoviesTable = `CREATE TABLE unseen_movies (
        id int UNIQUE,
        name CHAR(200),
        description VARCHAR (999)
      );`;

      connection.query(createDB, (err, result) => {
        // console.log(`step 3) if db doesnt exist create it`);
        if (err) {
          console.log(err);
        }
        // console.log(`${DB_Name} Created!`);
      });

      connection.query(useDB, (err, result) => {
        if (err) {
          console.log(err);
        }
        // console.log( "STEP 3.5) USE DB WHEN MADE");
      });

      connection.query(seenMoviesTable, (err, result) => {
        if (err) {
          console.log(err);
        }
        // console.log('Created TABLE  seen Movies');
      })

      connection.query(unseenMoviesTable, (err, result) => {
        if (err) {
          console.log(err);
        }
        // console.log( `CREATED TABLE unseen_movies`)
      })

    } else {
      // console.log(result, "STEP 4) this is if the db already exists");

      connection.query(useDB, (err, result) => {
        if (err) {
          console.log(err);
        }
        // console.log(result, "STEP 5) USE DB THATS ALREADY MADE");
      });
    }
  });

});

// make func to check tables for movie id && title

const unseen_movies = 'unseen_movies';
const seen_movies = 'seen_movies';

let checkUnseenMoviesTable = (title, desc, id, callBack) => {

  const queryCheckUnSeenMovies = `SELECT * FROM unseen_movies WHERE name = "${title}" AND description = "${desc}" AND id = ${id};`;

  console.log(` IN checkUnseenMoviesTable going to check db in unseen table`)

  let response;
  connection.query(queryCheckUnSeenMovies, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('WE got RESULT BACK,', result);
    if (result.length === 0 ) {
      response = false; // NOT in UnseenMoviesTable so return false no match
      callBack(response);
      return;
    }
    // console.log(result)
    response = true; // IT IS in UnseenMovies Table

    callBack(response);
  })

}

let addToSeenMoviesTable = (title, desc, id, callBack) => {

  const addToSeenMovieTable = `INSERT INTO seen_movies (id, name, description) VALUES ('${id}', "${title}", "${desc}");`;

  connection.query(addToSeenMovieTable, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('added to SEEN movies db table');
    callBack(true);
  })

}

let deleteMovieInUnseenTable = (title, desc, id, callBack) => {

  const deleteMovieQueryInUnseenTable = `DELETE FROM unseen_movies WHERE name = '${title}' AND description = '${desc}' AND id = '${id}';`;

  connection.query(deleteMovieQueryInUnseenTable, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log('DELETED movie in UNSEEN table');
    callBack(true);
  })
}

let checkIfMovieIsInTable = (title, desc, id, callBack, table) => {

  const queryCheck = `SELECT * FROM ${table} WHERE name = "${title}" AND description = "${desc}" AND id = "${id}";`;

  connection.query( queryCheck, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result, 'checking table first to see if movie is already saved');
    if (result.length > 0) {
      callBack(true);
      return;
    } else {
      callBack(false);
      return;
    }
  })
}

module.exports.checkUnseenMoviesTable = checkUnseenMoviesTable;

module.exports.addToSeenMoviesTable = addToSeenMoviesTable;

module.exports.deleteMovieInUnseenTable = deleteMovieInUnseenTable;

module.exports.checkIfMovieIsInTable = checkIfMovieIsInTable;
// console.log(module)