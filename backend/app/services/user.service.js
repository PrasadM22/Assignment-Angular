const model = require('../models/user.model')

class User{
    
    createUser=(userData,callback)=>{
         model.create(userData,(error,value)=>{
            (error ? callback(error,null) : callback(null,value))
        });
    }
    
    updateUser=(userData,callback)=>{
        model.update(userData,(error,value)=>{
            if(error){
                callback(error,null)
            }else{
                callback(null,value)
            }
        })
    }

    deleteUser=(userId)=>{
        return model.deleteData(userId)
        .then()
        .catch(error=>{
            return error
        })
    }

    readData =  (userId)=>{
        return  model.readData(userId).then(data=>{
            return data;
        }).catch(error=>{
            return error;
        })
    }

    readAll=(callback)=>{
        return model.readData((error,data)=>{
            if(!error){
                callback(null,data)
            }else{
               callback(error,null)
            } 
        })
    }
}

module.exports = new User()