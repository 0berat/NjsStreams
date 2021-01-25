const fs =require('fs')
const file = "/home/cubee/WebstormProjects/sterams/okunabilirstream/videoplayback.mp4";
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4')
let progress = 0;
fs.stat(file,(err,data)=>{
    const total = data.size;
    readStream.on('data', (chunk) => {
        // console.log('bir veri geldi');
        progress += chunk.length;
        // console.log(chunk.length);
        console.log(Math.round(100 * progress / total)+ "%");
    });
    readStream.pipe(writeStream);
    writeStream.on('finish',()=> {
        console.log('yeni dosya oluşturuldu')
    })
} )