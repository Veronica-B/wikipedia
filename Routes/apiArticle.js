const router = require('express').Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
// const connection=require('./connection.js')
require('dotenv').config();


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


//adds a database entry
// router.post('/article', (req, res) => {
//     console.log('initially working')
//     console.log(req.body)

//         // id:  ++ 1,
//         const article_name= req.body.article_name;
//         const section_header1 =req.body.section_header1;
//         const section1 =req.body.section1;
//         const section_header2 =req.body.section_header2;
//         const section2 =req.body.section2;
//         const section_header3 =req.body.section_header3;
//         const section3 =req.body.section3;
//         const section_header4 =req.body.section_header4;
//         const section4 =req.body.section4;
//         const section_header5 =req.body.section_header5;
//         const section5 =req.body.section5;
//         const section_header6 =req.body.section_header6;
//         const section6 =req.body.section6;
//         const section_header7 =req.body.section_header7;
//         const section7 =req.body.section7;
//         const section_header8 =req.body.section_header8;
//         const section8 =req.body.section8;
//         const section_header9 =req.body.section_header9;
//         const section9 =req.body.section9;

//         const insertInto=  `INSERT INTO article(article_name, section_header1, section1, section_header2, section2,
//             section_header3, section3,section_header4, section4, section_header5, section5,section_header6, section6,
//             section_header7, section7, section_header8, section8, section_header9, section9)
//             VALUES( ?, ?, ? , ? , ? , ?, ? , ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
// connection.query(insertInto, [ article_name, section_header1, section1, section_header2, section2,
//     section_header3, section3,section_header4, section4, section_header5, section5,section_header6, section6,
//     section_header7, section7, section_header8, section8, section_header9, section9], (err, data, fields)=> {
//           if(err) throw err;
//           console.log(`it works heres a name: ${article_name} `)
//           res.end();
// })
// });


//deletes a single database entry
router.delete('/article/:article_id',(req, res)=>{
    connection.query(`DELETE FROM article WHERE article_id = ${req.params.article_id}`, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result)    
    });
});

module.exports = router;