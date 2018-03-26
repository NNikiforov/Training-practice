const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
    if(req.url.startsWith("/public/")){
        let filePath = req.url.substr(1);
        fs.readFile(filePath, function(error, data){
            if(error){
                res.statusCode = 404;
                res.end("Error 404!");
            }
            else{
                res.end(data);
            }
            return;
        })
    }
    else{
        res.end();
    }
}).listen(3000, () => console.log('Сервер работает'));
