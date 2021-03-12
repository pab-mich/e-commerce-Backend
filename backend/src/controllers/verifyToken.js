const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            auth: false,
            massage: 'the token dosn´t exist'
        })
    }
    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next()
}

module.exports = verifyToken;