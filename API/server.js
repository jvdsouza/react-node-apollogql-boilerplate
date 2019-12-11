require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const port = process.env.PORT;
const app = express();

//----middleware---
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

//----controllers----
const pong = require('./controllers/pong');

//----requests-----
app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/ping', (req, resp) => {
    pong(req, resp);
})

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

//---connection listening---
app.listen(port || 5000, () => {
    console.log(`app is running at http://localhost:${port}`);
})