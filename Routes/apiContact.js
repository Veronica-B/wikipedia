// const express= require('express')
// const app= express();
const router = require('express').Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
// const cors= require('cors')
require('dotenv').config();
// app.use(cors())

//middleware that makes it process POST requests easier 
router.use(bodyParser.urlencoded({extended: false}))
const selectAll= 'SELECT * FROM Form ';


//creates connection to mysql
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port:process.env.MYSQL_HPORT,
    user:process.env.MYSQL_HUSER,
    password:process.env.MYSQL_HPASSWORD,
    database:process.env.MYSQL_HDATABASE
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

router.get('/contact/:contact_id',(req, res)=>{
    connection.query(`${selectAll} WHERE contact_id = ${req.params.contact_id}`, (err, result) => {
            if(err) throw err;
            console.log(result);

            res.send(result)
            // res.end()
            
    });
});

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
router.put('/contact/:contact_id',(req, res)=>{
    connection.query(`UPDATE Form SET first_name = 'it works for now' WHERE contact_id = ${req.params.contact_id}`, (err, result) => {
        
            if(err) throw err;

            console.log(result);

            res.send(result)
            // res.end()
            
    });
});

router.delete('/contact/:contact_id',(req, res)=>{
    connection.query(`DELETE FROM Form WHERE contact_id = ${req.params.contact_id}`, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result)
            // res.end()
            
    });
});

// console.log(values)


// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
// });


module.exports= router;