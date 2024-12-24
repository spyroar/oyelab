
const jwt=require('jsonwebtoken')
const generateToken = (user) => {
    const payload = { 
      userId: user._id, 
      email: user.email 
    }; 
    const secretKey = process.env.SECRET_KEY; 
    const options = { expiresIn: '7d' }; 
  
    return jwt.sign(payload, secretKey, options);
  };
  module.exports={
    generateToken
  }