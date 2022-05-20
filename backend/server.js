const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors  = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

app.get('/',(req,res) =>{
    res.send("Backend Server is active")
})
require('dotenv').config();
const PORT = process.env.PORT;

require('./Dbconfig');
require('./app/routes/route.js')(app);
app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`)
})
module.exports = app;