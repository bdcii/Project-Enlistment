var jwt = require('jsonwebtoken');

// if user matches an already generated token (3 hours of expiration) if not then do not generate token 

function generateToken(user) {
  if(!user) return null;

  let currentUser = {
    userID: user.userID,
    name: user.firstName + ' ' + user.lastName,
    email: user.email
  };

  return jwt.sign(currentUser, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 3
  });
}


function getCleanUser(user) {
  if(!user) return null;

  return {
  userId: user.userID,
  name: user.firstName + ' ' + user.lastName,
  email: user.email
  };
}



  
module.exports = {
 generateToken,
 getCleanUser
}