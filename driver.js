'use strict';

const events = require('./events.js');

events.on('pickup', pickupOrderHandler);

function pickupOrderHandler(payload) {

    setTimeout(function () {
        console.log(`DRIVER: picked up ${payload.orderId}`);
        events.emit('in-transit', payload);
    }, 1000);

    setTimeout(function () {
        console.log(`DRIVER: delivered up ${payload.orderId}`);
        events.emit('delivered', payload);
    }, 3000);
}


events.on('pickup', (payload) => {
    alllogs('pickup', payload)
});

events.on('in-transit', (payload) => {
    alllogs('in-transit', payload)
});
events.on('delivered', (payload) => {
    alllogs('delivered ', payload)
});

function alllogs(event, payload) {
    console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}