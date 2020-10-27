let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

connection.connect(err => {
    if (err) console.log(err);
})


console.log('git ignore?')