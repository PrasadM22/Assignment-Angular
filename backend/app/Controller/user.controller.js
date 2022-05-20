const services = require('../services/user.service')

class User{

    createUser=(request,response)=>{

        const userData={            
            DEPTNo:request.body.DeptNo,
            DEPTName:request.body.DeptName,
            DEPTID:request.body.DeptId,
            DEPTCat:request.body.DeptCategory
        }

        services.createUser(userData,(error,value)=>{
            if(!error){
                response.status(200).send({sucess : true ,message:"User created",data:value});
            }
            else{
                response.status(500).send({sucess: true ,message:'error occure'});
            }
        })
    }    

    updateUser=(request,response)=>{
        const userDetails={
            user_id : request.params.userId,
            userData:{
                DEPTNo:request.body.DeptNo,
                DEPTName:request.body.DeptName,
                DEPTID:request.body.DeptId,
                DEPTCat:request.body.DeptCategory
            }
        }

        services.updateUser(userDetails,(error,value)=>{
            if(!error){
                response.status(200).send({success: true,message:'User Data Updated',data:value});
            }else{
                response.status(500).send({success: false , message:'User Not Found'})
            }
        })
    }

    deleteData=(req,res)=>{
        const Id = req.params.userId;
        services.deleteUser(Id).then((data)=>{
            res.status(200).send({message:"Data Deleted"})
        }).catch(error=>{
            res.status(500).send({message:"Error occure During Deletion"})
        })
    }
    
    readData=(req,res)=>{
        const Id=req.params.userId;
        services.readData(Id).then((data)=>{
            res.status(200).send({message:"Data Found",data:data})
        }).catch(error=>{
            res.status(500).send({message:"Data Not Found"})
        })
    }

    readAllData=(req,res)=>{
        services.readAll((error,value)=>{
            if(!error)
            res.status(200).send({success:true,message:"Data Found",data:value})
            else
            res.status(500).send({success:false,message:"Data Not Found"})
        })
    }
}

module.exports = new User()