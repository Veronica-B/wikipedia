
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({extended: false}))
let router =require('./Routes/apiContact')

app.use(express.json()); // turns my app into a json 
app.use(cors());


//sets server up
app.use('/api', router);{
    const port =  8080
    app.listen(port, () => {
        console.log(port)
      console.log(`Server running on port ${port}`);
      console.log(router)
    })
};


// router.get('/', function (req, res) {
//   res.send("hello");
// });

// app.listen(process.env.PORT || 8080);

