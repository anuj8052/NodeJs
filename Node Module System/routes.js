
const fs = require('fs'); // to work with file system

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html'); // Set content type header
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
      }
    
      if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
    
        });
        return req.on('end', () =>{
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
      }
      res.setHeader('Content-Type', 'text/html'); // Set content type header
      res.write('<html>');
      res.write('<head><title>Node Js Tut</title><head>');
      res.write('<body><h1>Hello How R you</h1></body>');
      res.write('</html>');
      res.end();
}
module.exports = requestHandler;