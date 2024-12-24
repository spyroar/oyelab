
const { check, validationResult } = require('express-validator'); 
const userValidationRules = () => [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email format')
  ];

  module.exports={userValidationRules}