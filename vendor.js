"use strict";

require('dotenv').config();
let faker =require('faker');
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:3002';
const socket=io.connect(`${HOST}/caps`);



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

    socket.emit('pickup', payload);

   
}, 5000);



socket.on('vendorDelivered',payload=>{
    console.log(`thank you for delivering ${payload.orderId}`);

})