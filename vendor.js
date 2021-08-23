// const events = require('./events');
'use strict';
let faker = require('faker');

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const storeConnection = io.connect(host);

// brainConnection.on('brightness', payload=> {
//     if (payload.brightness >= 75) {
//         console.log('Cover your eyes ... !')
//     }
// })






    storeConnection.on('delivered', deliveredOrderHandler);



function deliveredOrderHandler(payload) {
    console.log(`VENDOR: Thanks for delivering ${payload.orderId}!`);
}

