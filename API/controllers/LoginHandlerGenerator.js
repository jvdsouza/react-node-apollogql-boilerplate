class LoginHandler {
    login (req, resp, jwt, secret) {
        let username = req.body.username;
        let password = req.body.password;

        // Fetch user from DB using username

        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign(
                    { username },
                    secret,
                    { expiresIn: '24h' }
                );
                // Return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token,
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed, please check the request'
            });
        }
    }
}

module.exports = {
    LoginHandler,
}