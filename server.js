
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({extended: false}))
let router =require('./Routes/apiContact')
require('dotenv').config();
app.use(express.json()); // turns my app into a json 
app.use(cors());


//sets server up
app.use('/api', router);{
    app.listen(process.env.PORTSERVER, () => {
      console.log(`Server running on port ${process.env.PORTSERVER}`);
    })
};

// app.listen(process.env.PORT || 8080);

