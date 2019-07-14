
const uri = 'http://localhost:5000';
const client = require('socket.io-client')(uri);

client.emit('chat', {message: 'Ola servidor!'});

client.on('chat', (data) => {
    console.log(data);
});