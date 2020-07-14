
const router = require('express').Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const connection=require('./connection.js')
require('dotenv').config();

//middleware that makes it process POST requests easier 
router.use(bodyParser.urlencoded({extended: false}))

//Statement to SELECT ALL from the table Form
const selectAll= 'SELECT * FROM Form ';

//creates connection to mysql
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port:process.env.MYSQL_HPORT,
    user:process.env.MYSQL_HUSER,
    password:process.env.MYSQL_HPASSWORD,
    database:process.env.MYSQL_HDATABASE
});

//connects connection to mysql
connection.connect((err,connection) =>{
    if(err){
        throw err
}else{
        console.log('Connected!:)');
}})

//shows all database entries
router.get('/contact',(req,res)=>{
    connection.query(selectAll, (err, data) => {
      if(err) throw err;
        res.send(data)
        console.log(err)
    })
})

//shows one database entry, selected by unique id
router.get('/contact/:contact_id',(req, res)=>{
    connection.query(`${selectAll} WHERE contact_id = ${req.params.contact_id}`, (err, result) => {

            if(err) throw err;
            console.log(result);
            res.send(result)
            
    });
});

//adds a database entry
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
        //   console.log(`it works heres a name: ${first_name} `)
        res.writeHead(301,{Location: 'http://localhost:3000/contact'});
          res.end()
})
});

//updates database entry
router.put('/contact/:contact_id',(req, res)=>{
  
    const first_name= req.body.first_name;
    const last_name =req.body.last_name;
    const email =req.body.email;
    const message =req.body.message;

    connection.query('UPDATE Form SET `first_name` = ? , `last_name` = ?, `email`= ?, `message` = ? WHERE `contact_id` = ' + req.params.contact_id ,
    [ first_name, last_name, email, message], (err, result) => {
        
            if(err) throw err;

            console.log(result);

            res.send(req.body);       
    });
});

//deletes a single database entry
router.delete('/contact/:contact_id',(req, res)=>{
    connection.query(`DELETE FROM Form WHERE contact_id = ${req.params.contact_id}`, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result)    
    });
});

module.exports= router;