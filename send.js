var azure = require('azure');
const key = require('./config/azureKey');

var serviceBusService = azure.createServiceBusService(key);

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
    nome: "Dummy vídeos for Demo",
    caminho: "./arquivos/video1280x720.mp4"
};

var message = {
    body: JSON.stringify(pessoa)
};

serviceBusService.sendQueueMessage('myqueue', message, function (error) {
    if (error != null) {
        console.error(error);
    }
});