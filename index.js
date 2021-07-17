const express = require('express')
const app = express()
const http = require('http').createServer(app);
const https = require('https').createServer(app);
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
var cors = require('cors');

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/data', (req, res) => {
    res.send({"success":true, "data":req.body.data1});
})

http.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})