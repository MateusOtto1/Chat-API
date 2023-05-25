const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    if (decoded.id === id) {
        return true; //Token e id são válidos
      } 
    else {
        return false; //Id não corresponde ao do token
    }
});

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id}, key, {expiresIn:28800});
    }
    return false;
};

module.exports = {
    checktoken,
    setToken,
};