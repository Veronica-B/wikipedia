const router = require('express').Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
// const connection=require('./connection.js')
require('./node_modules/dotenv/types').config();


//middleware that makes it process POST requests easier 
router.use(bodyParser.urlencoded({extended: false}))

//Statement to SELECT ALL from the table article
const selectAll= 'SELECT * FROM article ';


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
        console.log('Connected! --Verify');
}})

router.get('/article',(req,res)=>{
    connection.query(selectAll, (err, data) => {
      if(err) throw err;
        res.send(data)
        console.log(err)
    })
})


//shows one database entry, selected by unique id
router.get('/article/:article_id',(req, res)=>{
    connection.query(`${selectAll} WHERE article_id = ${req.params.article_id}`, (err, result) => {

            if(err) throw err;
            console.log(result);
            res.send(result)
            
    });
});



//deletes a single database entry
router.delete('/article/:article_id',(req, res)=>{
    connection.query(`DELETE FROM article WHERE article_id = ${req.params.article_id}`, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result)    
    });
});

module.exports = router;