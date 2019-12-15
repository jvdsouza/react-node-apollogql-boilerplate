const checkToken = (req, resp, next, jwt, secret) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers

    if (token) {
        console.log("initial token: ", token);
        
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
            console.log("parsed token", token);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                return resp.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return resp.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = {
    checkToken
}