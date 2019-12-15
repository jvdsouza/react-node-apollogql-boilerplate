require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const jwt = require('jsonwebtoken');

const port = process.env.PORT;
const app = express();

//----middleware---
const jwtValidate = require('./jwtValidate');
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

//----controllers----
const pong = require('./controllers/pong');
const LoginHandlerGenerator = require('./controllers/LoginHandlerGenerator');
const jwtLoginHandler = new LoginHandlerGenerator.LoginHandler();
//----requests-----
app.get('/', 
    (req, resp) => {
        resp.sendFile(path.join(__dirname + '/index.html'));
    }
);

app.get('/profile', 
    (req, resp, next) => {
        jwtValidate.checkToken(req, resp, next, jwt, process.env.secret)
    }, 
    (req, resp) => {
        resp.sendFile(path.join(__dirname + '/profile.html'));
    }
);

app.post('/login', (req, resp) => {
    jwtLoginHandler.login(req, resp, jwt, process.env.SECRET)
});

app.get('/ping', (req, resp) => {
    pong(req, resp);
});

//---connection listening---
app.listen(port || 5000, () => {
    console.log(`app is running at http://localhost:${port}`);
});