const service = require('../services/login.service')

class User{
    loginUser = (request,response)=>{
    const userData={
            userName : request.body.userName,
            password : request.body.password
        }
        service.loginUser(userData,(error,value)=>{
            if(!error){
                response.status(200).send({success:true,message:"User Login Successfully",Login_Token:value});
            }else{
                response.status(500).send({success:false,message:"Login Failed"});
            }
        })
    }
}
module.exports = new User()