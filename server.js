const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    path = './files/';

    switch(req.url){
        case '/':{
            path += 'index.html';
            res.statusCode = 200;
            break;
        }

        case '/about':{
            path += 'about.html';
            res.statusCode = 200;
            break;
        }

        case '/about-us':{
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        }

        default:{
            path += 'error404.html';
            break;
        }
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
        }
        res.end(data);
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port number 3000');
});