const express = require('express')
const app = express()
const http = require('http').createServer(app);
const https = require('https').createServer(app);
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');


//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//routes endpoint
routes(app);

http.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})