 const express = require('express');
const { createUser,getAllUsers,getUserById, updateUser, deleteUser} = require('../controllers/userController');
const { userValidationRules } = require('../middlewares/validateUser');

 const router=express.Router();


router.post('/users',userValidationRules(),createUser) // Create a user routes
router.get('/users',getAllUsers)                      //Retrieve all users
router.get('/users/:id',getUserById)                  // find user by id  
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)
 module.exports=router