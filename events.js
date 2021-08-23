// const Events = require('events');
// const events = new Events();


// module.exports = events;
'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';



const storeConnection = io.connect(host);



storeConnection.emit('pickup', {level: 45});
storeConnection.emit('in-transit', {level: 90});

storeConnection.emit('delivered', {temp: -10})