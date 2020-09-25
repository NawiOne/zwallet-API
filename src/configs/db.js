const mySQL = require("mysql");

const db = mySQL.createConnection({
    host : process.env.HOST,
    user: process.env.DBUSER,
    database: process.env.DATABASE,
    password: process.env.DBPASSWORD,
});

db.connect((err)=>{
    if(err){
       throw err; 
    } 
    console.log('Database connected');
});

module.exports = db;