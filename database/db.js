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
    console.log("step 1) we check if db EXISTS");
    if (err) {
      console.log(err);
    }

    console.log(result, "step 2) get the result if it exists or not");

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
        console.log(`step 3) if db doesnt exist create it`);
        if (err) {
          console.log(err);
        }
        console.log(`${DB_Name} Created!`);
      });

      connection.query(useDB, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log( "STEP 3.5) USE DB WHEN MADE");
      });

      connection.query(seenMoviesTable, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Created TABLE  seen Movies');
      })

      connection.query(unseenMoviesTable, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log( `CREATED TABLE unseen_movies`)
      })

    } else {
      console.log(result, "STEP 4) this is if the db already exists");

      connection.query(useDB, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result, "STEP 5) USE DB THATS ALREADY MADE");
      });
    }
  });

});

