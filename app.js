// const http = require('http');

const express = require('express');
const app = express();

// app.use((req,res, next)=>{
//     console.log('In the middleware.......');
//     next();
                                                       // Dummy Middleware
//     // next();
//     // next();
// });


app.use('/',(req,res, next)=>{
    console.log('This always runs.....');
    next();
    
});



app.use('/add-product',(req,res, next)=>{
    console.log('In  middleware.......');
    res.send('<h1>Add Product Page........</h1>');
});


app.use('/',(req,res, next)=>{
    console.log('In another middleware.......');
    res.send('<h1>Hello from express.....</h1>');
});

// app.use((req,res, next)=>{
//     console.log('In third other middleware.......'); // My new Middlewre  and their value.
//     next();
// });

// app.use((req,res, next)=>{
//     console.log('In the fourth middleware.......');
// });



// let server = http.createServer(routes);
// const server = http.createServer(app);
// server.listen(5001);
app.listen(5001);