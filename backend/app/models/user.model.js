const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    DepartmentNo : {
                type:Number
                },
    DepartmentName : {
                type:String
                },
    DepartmentId:{
                type:String
                },
    DepartmentCategory:{
                type:String
    }
});
const userModel  = mongoose.model('Department',userSchema);

class User{
     create(userdata,callback){
         const user = new userModel({
            DepartmentNo : userdata.DEPTNo,
            DepartmentName :userdata.DEPTName,
            DepartmentId: userdata.DEPTID,
            DepartmentCategory: userdata.DEPTCat
         })
            user.save().then((error,value)=>{
                (error ? callback(null,error) : callback(value,null))
            });
     }

    update= (Data,callback)=>{
         const user = new userModel({
            DepartmentNo : Data.userData.DEPTNo,
            DepartmentName :Data.userData.DEPTName,
            DepartmentId: Data.userData.DEPTID,
            DepartmentCategory: Data.userData.DEPTCat
         })

         const user_id = Data.user_id;

         userModel.findByIdAndUpdate(user_id,{
            DepartmentNo : user.DepartmentNo,
            DepartmentName :user.DepartmentName,
            DepartmentId: user.DepartmentId,
            DepartmentCategory: user.DepartmentCategory
         },{new : true})
         .then(data =>{
            if(!data){
                return callback(error,null);
            }
            else{
                return callback(null,data);
            }
         })
     }

    deleteData=(data)=>{
        return userModel.findByIdAndDelete(data)
        .then()
        .catch(error=>{
            return error;
        })
    }

    readData= (Id) =>{
        try{
        console.log(Id)
        return  userModel.findById(Id).then(data=>{
            return data
        }).catch(error=>{
            return error
        })
    }catch(err){
        return err
    }
    }
    
    readData=(callback)=>{
        return userModel.find((error,value)=>{
            (!error ? callback(null,value):callback(error,null))
        })
    }
}
module.exports = new User()