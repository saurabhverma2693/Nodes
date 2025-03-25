const http = require('http');
let server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
// process.exit();
});

server.listen(5000);