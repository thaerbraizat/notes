let faker = require('faker');
const events = require('./events');

require('dotenv').config();



    class Fake{
        constructor(orderId,customerName,address){
            this.storeName=process.env.STORE;
            this.customerName=customerName;
            this.orderId=orderId;
            this.address=address;
        }
    }
  



    setInterval ( function(){ 
        let customerName = faker.name.findName();
        let orderId = faker.phone.phoneNumber();
        let address = faker.address.streetAddress();
        
        let payload = 
            new Fake(orderId,customerName,address)

            // storeName: process.env.STORE,
            // orderId: orderId,
            // customerName: customerName,
            // address: address
       
        events.emit('pickup', payload)

    }, 5000);



events.on('delivered', deliveredOrderHandler);



function deliveredOrderHandler(payload) {
    console.log(`VENDOR: Thanks for delivering ${payload.orderId}!`);
}

