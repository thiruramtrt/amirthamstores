//Install express server
const express = require('express');
const path = require('path');

// If Getting Error on host in heroku remove 

// use "start": "node server.js",

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/amirtha-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/amirtha-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);