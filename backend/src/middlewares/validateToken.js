const jwt = require('jsonwebtoken');
const validateToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        token = req.body.token;
    }
    if (!token) {
        console.log('No token');
        return res.status(401).json({
            auth: false,
            message: 'No token provided.'
        });
    }

    jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = validateToken;