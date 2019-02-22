/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Rupam!');
}).listen(8080); */

var http=require('http');
//var dt=require('./module/date/mydate');
var fs=require('fs');

var server=http.createServer(function(req,res)
{
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //response.write("The date time are currently:"+dt.mydatemod());
    res.write(data);
    return res.end();
  });

  /*fs.rename('display.html', 'index.html', function(err){
    if (err) throw err;
    console.log('renamed complete');
  });*/

});
server.listen(8000);

//console.log('Server running at http://127.0.0.1:8081/');