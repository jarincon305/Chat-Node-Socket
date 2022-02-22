const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const colors = require('colors');

app.set('port', 3000);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected ');
    socket.on('message', (param) => {
        console.log("New message ",param);
        io.emit('message', param);

    });
})

server.listen(app.get('port'), () => {
    console.log(`App Listen In Port ${app.get('port')}`.rainbow);
})