const http = require('http');
let server = http.createServer((req,res)=>{
console.log(req);
// process.exit();
});

server.listen(5000);