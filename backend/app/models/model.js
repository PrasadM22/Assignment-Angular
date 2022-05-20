const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    firstName :{type : String},
    lastName : {type : String},
    userName : {type : String},
    password : {type : String}
});
const UserModel = mongoose.model('user',userSchema);

class UserModule{
          async newUser(userData){
               const user = new UserModel({
                firstName:userData.firstName,
                lastName: userData.lastName,
                userName: userData.userName,
                password: bcrypt.hashSync(userData.Password,10)
               });
               try{
                return user.save();
               }catch(error){
                   return error;
               }
            }
            
            loginUser(userData,callBack){
                UserModel.findOne({userName:userData.userName},(error,value)=>{
                    if(error){return callBack(error,null)
                    }else if(!value){
                        return callBack(error,null)
                    }
                    return callBack(null,value.password)
                });
            }
}
module.exports = new UserModule()