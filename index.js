const express = require('express')
const app = express()

app.use('/', express.static('public'))

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(server_port, server_ip_address, () => console.log('ExpressApp1 Listening on ' + server_ip_address + ':' +  server_port  + '!'));
