var azure = require('azure');

var serviceBusService = azure.createServiceBusService("");

var queueOptions = {
    MaxSizeInMegabytes: '5120',
    DefaultMessageTimeToLive: 'PT1M'
};

serviceBusService.createQueueIfNotExists('myqueue', queueOptions, function (error) {
    if (error != null) {
        console.error(error);
    }
});

let pessoa = {
    nome: "Thiago Adriano",
    idade: 34
};

var message = {
    body: JSON.stringify(pessoa),
    customProperties: {
        testproperty: 'TestValue'
    }
};
serviceBusService.sendQueueMessage('myqueue', message, function (error) {
    if (error != null) {
        console.error(error);
    }
});