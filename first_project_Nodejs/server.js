const http = require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application/json'}) //header type de retour json 
    res.end('hello from my server') // body
})
const PORT= 5000;
server.listen(PORT,()=>{
    console.log('listen on port',PORT)
})