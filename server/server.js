const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', api)
app.get('/', function(req, res) {
    res.send('Hello From Server')
})

app.use(express.static(__dirname + './ngApp/dist/ngApp'));

app.get('/*', (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, './ngApp/dist/ngApp/index.html'))
})

app.listen(PORT, function() {
    console.log('Server Running on Localhost: ' + PORT)
})