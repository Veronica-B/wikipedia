// const express= require('express')
// const app= express();
const router = require('express').Router();
const mysql = require('mysql');
// const cors= require('cors')
// require('dotenv').config();
// app.use(cors())

const selectAll= 'SELECT * FROM Form';

const connection = mysql.createConnection({
 
});

connection.connect((err,connection) =>{
    if(err){
        throw err
}else{
    console.log('Connected!:)');
}})
  


router.get('/contact',(req,res)=>{
    connection.query(selectAll, (err, data) => {
      if(err) throw err;
        res.send(data)
        console.log(err)
    })
})

// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
// });


module.exports= router;