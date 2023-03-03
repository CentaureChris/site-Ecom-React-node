const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.split(" ")[1]) {
        res.status(401).json({ mess: 'token non transmit' })
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
        const user = jwt.verify(token, 'ma cle');
        req.user = user
        next()
    }
    catch {
        res.status(403).json({ mess: 'erreur de token' })
    }
}

module.exports = auth