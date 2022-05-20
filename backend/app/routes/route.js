const loginController = require('../Controller/login.controller')
const registerController = require('../Controller/register.controller');
const userController = require('../Controller/user.controller');
const UserController = require('../Controller/user.controller')

module.exports=(app)=>{
    app.post('/register',registerController.registerUser);
    
    app.post('/login',loginController.loginUser);

    app.post('/create',UserController.createUser); 

    app.put('/update/:userId',UserController.updateUser);

    app.delete('/delete/:userId',UserController.deleteData);

  //  app.get('/readData/:userId',userController.readData);

    app.get('/readAllData',UserController.readAllData);
}
    
    
