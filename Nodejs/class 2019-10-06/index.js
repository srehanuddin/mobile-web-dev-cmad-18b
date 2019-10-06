// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


var http = require('http')

http.createServer((req, res)=>{
    // console.log(req.url)
    // console.log(req.method)
    if(req.url == '/'){
        res.end('Hello World!')
    }
    else if(req.url == '/abc'){
        res.end('A to C')
    }
    else if(req.url == '/xyz'){
        var users = [{
            name : "Ali"
        },
        {
            name : "Amir"
        }]
        res.end(JSON.stringify(users))
    }
    else if(req.url == '/home'){
        // var html = "<h1>Home</h1><p>This is Para</p>"
        // res.end(html)
        res.write("<h1>Home</h1>")
        res.write("<p>This is Para</p>")
        res.write("<ul>")
        res.write("<li>One</li>")
        res.write("<li>Two</li>")
        res.write("</ul>")
        res.end()
    }

}).listen(8000)


// var a = 1;
// var b = 2;

// require('./file1')

// console.log('hello world')
// console.log(a+b)

// require('./file1')