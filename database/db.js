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
    console.log('step 1) we check if db EXISTS')
    if (err) {
        console.log(err);
    }

    console.log(result, 'step 2) get the result if it exists or not'); 

    if (result.length === 0) {
        connection.query(createDB, (err, result) => {
            console.log(`step 3) if db doesnt exist create it`)
            if (err) {
                console.log(err);
            }
            console.log(`${DB_Name} Created!`)
        })
    } else {
      console.log(result, 'STEP 4) this is if the db already exists')
      connection.query(useDB, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result,'STEP 5) USE DB THATS ALREADY MADE')
      })
    }

  });

 //  console.log

});

// make db connection
// check if db exists if not make one
// then we can start filling db with user movies!

// make a func that check seen and unseen table for user movies

// console.log(`CHECK TO SEE IF DB EXISTS`)
// if (err) {
//     console.log(err, 'THIS IS AN ERR');
//     return;
// }
// debugger
// let potentialDB
// if (result.length > 0) {
//    potentialDB = Object.values(result[0]);
//    console.log(potentialDB)
// } else {
//     potentialDB = [];
// }
// console.log(result, 'result!', potentialDB)
// if ( result.length !== 0) { // databases similar to the one we want
//     for (let i = 0; i < potentialDB.length; i++) {
//         if ( !potentialDB[i].includes(DB_Name) ) {
//             connection.query( createDB, (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(`DATABASE created ${DB_Name}`);
//             })
//             break;
//         } else {
//             console.log(`${DB_Name}, already exists!`)

//             connection.query( useDB, (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 console.log(` Now using ${DB_Name}, as current DB`);
//             })
//             break;
//         }
//     }
// } else if (potentialDB.length === 0 ){
//     connection.query( createDB, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(`DATABASE created ${DB_Name}`);
//     })

//     connection.query( useDB, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.log(` Now using ${DB_Name}, as current DB`);
//     })

//     console.log('No related db found initizlized new DATABASE')
//     return;
// }
