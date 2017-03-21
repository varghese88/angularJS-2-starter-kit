var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');

var port = process.env.port || 3001;

app.use(express.static(path.join(__dirname)));

app.use(cors());

app.listen(port,function(){
    console.log('server is running on '+port);
})