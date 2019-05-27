var azure = require('azure');

var serviceBusService =
    azure.createServiceBusService("");


serviceBusService.receiveQueueMessage('myqueue', function (error, receivedMessage) {
    if (error != null) {
        console.error(error);
    }

    if (receivedMessage != null) {
        console.log(JSON.parse(receivedMessage.body));
    }

});