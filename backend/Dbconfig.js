const mongoose = require('mongoose');
const Database = process.env.DATABASE

mongoose.connect(Database).then(()=>{
    console.log("Connection Established Successfull")
}).catch((error)=>{
    console.log("Error occur during Connection",error)
    process.exit();
})