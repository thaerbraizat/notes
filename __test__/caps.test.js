'use strict';
const { it } = require('@jest/globals');
const faker = require('faker');
const events = require('../events');
require('../driver');
require('../vendor');
let storeName = 'dota2';

describe('events  tests', () => {

    beforeEach(()=>{
        jest.useFakeTimers();
        jest.spyOn(global.console,'log');
      })

    let ordeer = {
        orderId:faker.phone.phoneNumber(),
        storeName: storeName,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    it('pickup  test',() => {
        events.emit('pickup',ordeer)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
    it('deliveredtest',() => {
        events.emit('delivered',ordeer)
        expect(console.log).toHaveBeenCalled();
    })
    it('in-transit  test',() => {
        events.emit('in-transit',ordeer)
        jest.runAllTimers();
        expect(console.log).toHaveBeenCalled();
    })
   
})