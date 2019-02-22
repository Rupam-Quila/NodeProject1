var http=require('http');

//First way to creating a server
/*http.createServer(function(require, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Hello Rupam");
    response.end();
}).listen(7000);*/

//Second way to creating a server
/*server=http.createServer(function(require, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Hello Rupam");
    response.end();
});
server.listen(7000);
console.log("server are successfully created");*/

//Third way to creating a server
/*function myServer(require, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Hello Rupam</h1>");
    response.write("<p>Thank You Very Much</p>");
    response.end();
}
http.createServer(myServer).listen(7000);*/

console.log("server are successfully created");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello Rupam");
    res.end();
}).listen(7000);