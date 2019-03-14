const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, function() {
    console.log('listening on *****---->>>', PORT);
})