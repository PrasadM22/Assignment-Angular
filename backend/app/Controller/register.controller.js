const service = require('../services/register.service');

class User{
    registerUser =(request,response)=>{
        const user={
            firstName:request.body.firstName,
            lastName :request.body.lastName,
            userName:request.body.userName,
            Password:request.body.password
        }
        try{
        const data =  service.register(user)
        return response.status(200).send({success:true ,message:"Registration Successful"})
        }catch(error){
            return response.status(500).send({success:false,message:'Registration Failed'})
        }
    }
}
module.exports = new User();