const jwt = require('jsonwebtoken');

const checkToken = async (token, id, key) => {
  return jwt.verify(token, key, (err, decoded) => {
      if (err) {
          return false;
      }

      else if (decoded.id === id) {
          return true;
      }
      else {
          return false;
      }

  });
}

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id}, key, {expiresIn: 28800});
    }
    return false;
};

module.exports = {
    checkToken,
    setToken
};