
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json()); // turns my app into a json 
app.use(cors());


// Server static assets in production 
app.use(express.static('client/build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

let router = require('./Routes/apiContact')
let router_v = require('./Routes/apiVerification')
let router_a = require('./Routes/apiArticle')

app.use('/api', router);
app.use('/api', router_v);
app.use('/api', router_a);



//sets server up
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})
