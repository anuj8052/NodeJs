// creating a nodejs server in nodeJs

const http = require('http')


// function with name

// http.rqListner(req, res){

// }

// http.createServer(rqListner);



// function without name
//  event driven architecture
// http.createServer(function(req, res){

// })

//  but we will achieve the same

//  next gen javascript fucntion name arrow function

// const server = http.createServer((req, res) =>{

//     console.log(req.url, req.methos, req.headers);
//     // process.exit(); // we don't want to quit otherwise people will not reah to our web page
// })



// server.listen(3000);


//  sending response

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    res.write('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form><input type = "text"><button type = "submit></button></form></bosy>');
    res.write('</html>')
    res.end();
})


server.listen(1000);
