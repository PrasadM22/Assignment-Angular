const model  = require('../models/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class User{
    loginUser=(userData,callBack)=>{
        model.loginUser(userData,(error,value)=>{
            if(error){
                return callBack(error,null);
            }else if(this.checkPassword(userData.password,value))
            {
                const token = this.generateToken(userData);
                return callBack(null,token);
            }
        })
    }
    checkPassword(userInput,password){
        return bcrypt.compare(userInput,password)
    }

    generateToken(userData){
        return jwt.sign(userData,process.env.secret_key,{expiresIn:"1hr"})
    }
}

module.exports = new User()