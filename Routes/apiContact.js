// const express= require('express')
// const app= express();
const router = require('express').Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
// const cors= require('cors')
// require('dotenv').config();
// app.use(cors())

//middleware that makes it process POST requests easier 
router.use(bodyParser.urlencoded({extended: false}))
const selectAll= 'SELECT * FROM Form ';

const connection = mysql.createConnection({

});

connection.connect((err,connection) =>{
    if(err){
        throw err
}else{

    console.log('Connected!:)');
}})
  

router.post('/contact', (req, res) => {
    console.log('initially working')
    console.log(req.body)


        // id:  ++ 1,
        const first_name= req.body.first_name;
        const last_name =req.body.last_name;
        const email =req.body.email;
        const message =req.body.message;
        // values= req.query;
        const insertInto=  `INSERT INTO form(first_name, last_name, email, message )
            VALUES( ?, ?, ?, ?)`;
        
        

connection.query(insertInto, [ first_name, last_name, email, message], (err, data, fields)=> {
          if(err) throw err;
          console.log(`it works heres a name: ${first_name} `)
          res.end()
    

})

    });

// console.log(values)


// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
// });


module.exports= router;