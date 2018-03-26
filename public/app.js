var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    if(req.url.startsWith("/")){
        var filePath = req.url.substr(1);
        fs.readFile(filePath, function(error, data){
            if(error){
                res.statusCode = 404;
                res.end("Ресурс не найден!");
            }
            else{
                res.end(data);
            }
            return;
        })
    }
    else{
        // во всех остальных случаях отправляем строку hello world!
        res.end("Hello World!");
    }
}).listen(3000, () => console.log('Сервер работает'));
