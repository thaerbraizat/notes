'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const storeConnection = io.connect(host);

storeConnection.emit('pickup', pickupOrderHandler);

function pickupOrderHandler(payload) {

    setTimeout(function () {
        console.log(`DRIVER: picked up ${payload.orderId}`);
      
    }, 1000);

    setTimeout(function () {
        console.log(`DRIVER: delivered up ${payload.orderId}`);
    
    }, 3000);
}


storeConnection.on('pickup', (payload) => {
    alllogs('pickup', payload)
});

storeConnection.on('in-transit', (payload) => {
    alllogs('in-transit', payload)
});
storeConnection.on('delivered', (payload) => {
    alllogs('delivered ', payload)
});

function alllogs(event, payload) {
    console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}