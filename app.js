var azure = require('azure');

var serviceBusService = azure.createServiceBusService("");

var queueOptions = {
    MaxSizeInMegabytes: '5120',
    DefaultMessageTimeToLive: 'PT1M'
};

serviceBusService.createQueueIfNotExists('myqueue', queueOptions, function (error) {
    if (!error) {
        // console.error(error);
        // Queue exists
    }
});

var message = {
    body: 'Test message sd',
    customProperties: {
        testproperty: 'TestValue'
    }
};
serviceBusService.sendQueueMessage('myqueue', message, function (error) {
    //  console.log(message);
    if (error != null) {
        console.error(error);
    }
});


serviceBusService.receiveQueueMessage('myqueue', function (error, receivedMessage) {
    if (error != null) {
        console.error(error, 'error receive');
    }

    console.log(receivedMessage.body)

});

// serviceBusService.receiveQueueMessage('myqueue', { isPeekLock: true }, function (error, lockedMessage) {
//     if (!error) {
//         // Message received and locked
//         serviceBusService.deleteMessage(lockedMessage, function (deleteError) {
//             if (!deleteError) {
//                 // Message deleted
//             }
//         });
//     }
// });