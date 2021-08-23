'use strict';
'use strict';
let faker = require('faker');
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);



class Fake {
    constructor(orderId, customerName, address) {
        this.storeName = process.env.STORE;
        this.customerName = customerName;
        this.orderId = orderId;
        this.address = address;
    }
}




setInterval(function () {
    let customerName = faker.name.findName();
    let orderId = faker.phone.phoneNumber();
    let address = faker.address.streetAddress();

    let payload =
        new Fake(orderId, customerName, address)

    // storeName: process.env.STORE,
    // orderId: orderId,
    // customerName: customerName,
    // address: address

    io.emit('pickup', payload);

    io.emit('in-transit',payload );
    io.emit('delivered', payload);

}, 5000);




function pickupOrderHandler(payload) {

    setTimeout(function () {
        // console.log(`DRIVER: picked up ${payload.orderId}`);
        storeConnection.emit('in-transit', payload);
    }, 1000);

    setTimeout(function () {
        // console.log(`DRIVER: delivered up ${payload.orderId}`);
        storeConnection.emit('delivered', payload);
    }, 3000);
}

io.on('pickup', pickupOrderHandler, (payload) => {
    alllogs('pickup', payload)
});


io.on('in-transit', (payload) => {
    alllogs('in-transit', payload)
});
io.on('delivered', (payload) => {
    alllogs('delivered ', payload)
});


function alllogs(event, payload) {
    console.log('EVENT', { event, time: new Date().toLocaleString(), payload });
}

console.log('dota2 shop');
require('./vendor.js');
require('./driver.js');