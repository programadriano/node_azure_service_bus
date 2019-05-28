var azure = require('azure');
const key = require('./config/azureKey');

var serviceBusService =
    azure.createServiceBusService(key);


serviceBusService.receiveQueueMessage('myqueue', function (error, receivedMessage) {
    if (error != null) {
        console.error(error);
    }

    if (receivedMessage != null) {
        console.log(JSON.parse(receivedMessage.body));
    }

});