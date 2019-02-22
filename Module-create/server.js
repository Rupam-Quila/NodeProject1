/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Rupam!');
}).listen(8080); */

var http=require('http');
var eveluate=require('./module/date/mydate');
var custom=require('./module/custom/custom');
//var fs=require('fs');

var server=http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("The date time are currently:"+ eveluate.mydatemod());  
    res.write("\n"+"The sum of two number:" + eveluate.sum(5,6));  
    res.write("\n"+"The Multiplication of two number:" + custom.multi(5,6));
    res.write("\n"+"The Substraction of two number:" + custom.minus(5,6));
    res.write("\n <br>" + "<h1>"+custom.mystr+"</h1>");
    res.end();  
});
server.listen(7000);

console.log('Server running at http://127.0.0.1:8081/');