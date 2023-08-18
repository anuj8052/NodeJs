const http = require('http');
// const fs = require('fs') // to work with file system

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html'); // Set content type header
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

//   if(url === '/message' && mthod === 'POST'){
//     fs.writeFileSync('message.txt', 'DUMMY');
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     return res.end();
//   }
  res.setHeader('Content-Type', 'text/html'); // Set content type header
  res.write('<html>');
  res.write('<head><title>Node Js Tut</title><head>');
  res.write('<body><h1>Hello How R you</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(1000);
