
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({extended: false}))
let router =require('./Routes/apiContact')
let router_v =require('./Routes/apiVerification')
let router_a =require('./Routes/apiArticle')
require('./client/node_modules/dotenv/types').config();
app.use(express.json()); // turns my app into a json 
app.use(cors());

//sets server up
app.listen(process.env.PORTSERVER || 3000, () => {
  console.log(`Server running on port 8080`);
})


app.use('/api', router);
app.use('/api', router_v);
app.use('/api', router_a);


