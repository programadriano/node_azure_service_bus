var azure = require('azure');
const key = require('./config/azureKey');

const child = require('child_process');
const cmd = "ffmpeg";



var serviceBusService =
    azure.createServiceBusService(key);


serviceBusService.receiveQueueMessage('myqueue', function (error, receivedMessage) {
    if (error != null) {
        console.error(error);
    }

    if (receivedMessage != null) {
        let request = JSON.parse(receivedMessage.body);

        console.log("Iniciando processo...");
        let args = ["-i", request.caminho, "-vf", "scale=320:240", "./arquivos/output.mp4"];
        let proc = child.spawn(cmd, args);

        console.log(`O vídeo ${request.nome} esta sendo processado`);

        proc.on("close", function () {
            console.log("Vídeo processado e no diretório arquivos");
        });

    }

});