"use strict";

require('dotenv').config();
const io=require('socket.io-client');
const HOST='http://localhost:8002';
const socket=io.connect(`${HOST}/caps`);


let payload=
{ store: 'dota2',
  orderID: '123123123',
  customer: 'th',
  address: 'A' } 

jest.useFakeTimers();


describe("caps ", () => {
    it('connection',()=>{
        const caps = require("../caps");
        expect(socket.emit('connection',payload)).toBeTruthy;
    });
    it('pickup',()=>{
        const caps = require("../caps");
        expect(socket.emit('driverPickup',payload)).toBeTruthy();
      });
      it('transit ',()=>{
        const caps = require("../caps");
        expect(socket.emit('driverTransit',payload)).toBeTruthy();
      });
      it('deleverd ',()=>{
        const caps = require("../caps");
        expect(socket.emit('delivered',payload)).toBeTruthy();
        expect(socket.emit('vendorDelivered',payload)).toBeTruthy();
      });
});

