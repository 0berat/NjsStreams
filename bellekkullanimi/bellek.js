const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
  /*  fs.readFile('/home/cubee/WebstormProjects/sterams/bellekkullanimi/file.txt', (err, data) => {
        if (err)
            throw err;
        res.end(data);

    });
  */
    const readStream = fs.createReadStream('/home/cubee/WebstormProjects/sterams/bellekkullanimi/file.txt')
    readStream.pipe(res);

})
server.listen(3000);
