
const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {

    console.log('Cliente conectado!');

    socket.on('chat', (data) => {
        console.log(data);
        socket.emit('chat', {message: 'Ola cliente!'});
    });

});

server.listen(5000, () => {
    console.log('Servidor rodando na porta: 5000');
});
