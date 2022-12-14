const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth_token')
    if(!token) return res.status(400).json({
        status: res.statusCode,
        message: 'Access denied'
    });
    
    try {
        const verified = jwt.verify(token, process.env.JWT)
        req.user = verified
        next()
    }catch(err){
        res.status(400).json({
            status: res.statusCode,
            message: 'Invalid Token',
        })
    }
}

module.exports = verifyToken