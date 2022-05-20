const model = require('../models/model')

class UserService{
        register=(userdata)=>{
            return  model.newUser(userdata)
        }
}
module.exports = new UserService()