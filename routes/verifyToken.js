const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('auth-token'); // TODO: Auth token couldn't verify same hashed password in POSTMAN application
  if(!token) return res.status(401).send('Access Denied');
  try{
    const verified = jwt.verifiy(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  }catch (err) {
    res.status(400).send('Invalid Token');
  }
}
