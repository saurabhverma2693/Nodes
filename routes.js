const fs = require('fs');

const requestHandler = (req,res)=>{

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My Message</title></head>');
        res.write('<body> <form action="/message" method="POST" ><input type="text" name="message" ><button type="Submit">Send</button> </form> </body>');
        res.write('</html>');
      return  res.end();
    }
    
    if(url === '/message' && method === 'POST'){
    
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
    
       return req.on('end',()=>{
    const parsedBody = Buffer.concat(body).toString();
    // const message = parsedBody.split('=')[0]; // Logical Error in index
    const message = parsedBody.split('=')[1];
    fs.writeFile('message.txt',message,err => {
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }); 
        });
    }
    // fs.writeFileSync('message.txt','Dummy');
    
    
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First page</title></head>');
    res.write('<body> <h1>Hello from node js.......</h1> </body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     sometext:'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';


exports.handler = requestHandler;
exports.someText = 'Some hard coded text';