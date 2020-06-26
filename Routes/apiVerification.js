
// const router = require('express').Router();
// const mysql = require('mysql');
// const bodyParser = require('body-parser')
// // const connection=require('./connection.js')
// require('dotenv').config();


// //middleware that makes it process POST requests easier 
// router.use(bodyParser.urlencoded({extended: false}))

// //Statement to SELECT ALL from the table Form
// const selectAll= 'SELECT * FROM User_changes ';


// //creates connection to mysql
// // const connection = mysql.createConnection({
// //     host: process.env.MYSQL_HOST,
// //     port:process.env.MYSQL_HPORT,
// //     user:process.env.MYSQL_HUSER,
// //     password:process.env.MYSQL_HPASSWORD,
// //     database:process.env.MYSQL_HDATABASE
// // });

// //connects connection to mysql
// connection.connect((err,connection) =>{
//     if(err){
//         throw err
// }else{
//         console.log('Connected! --Verify');
// }})

// router.get('/verification',(req,res)=>{
//     connection.query(selectAll, (err, data) => {
//       if(err) throw err;
//         res.send(data)
//         console.log(err)
//     })
// })


// //shows one database entry, selected by unique id
// router.get('/verification/:user_id',(req, res)=>{
//     connection.query(`${selectAll} WHERE user_id = ${req.params.user_id}`, (err, result) => {

//             if(err) throw err;
//             console.log(result);
//             res.send(result)
            
//     });
// });

// //adds a database entry
// router.post('/verification', (req, res) => {
//     console.log('initially working')
//     console.log(req.body)

//         // id:  ++ 1,
//         const article_name= req.body.article_name;
//         const section_header =req.body.section_header;
//         const section =req.body.section;

//         const insertInto=  `INSERT INTO User_changes(article_name, section_header, section)
//             VALUES( ?, ?, ?)`;
        
// connection.query(insertInto, [ article_name, section_header, section], (err, data, fields)=> {
//           if(err) throw err;
//           console.log(`it works heres a name: ${article_name} `)
//           res.end();
// })
// });

// //updates database entry
// router.put('/verification/:user_id',(req, res)=>{
  
//     const article_name= req.body.article_name;
//     const section_header =req.body.section_header;
//     const section =req.body.section;

//     connection.query('UPDATE User_changes SET `article_name` = ? , `section_header` = ?, `section`= ? WHERE `user_id` = ' + req.params.user_id ,
//     [ article_name, section_header, section], (err, result) => {
        
//             if(err) throw err;

//             console.log(result);

//             res.send(req.body);       
//     });
// });


// //deletes a single database entry
// router.delete('/verification/:user_id',(req, res)=>{
//     connection.query(`DELETE FROM User_changes WHERE user_id = ${req.params.user_id}`, (err, result) => {
//             if(err) throw err;
//             console.log(result);
//             res.send(result)    
//     });
// });

// module.exports = router;