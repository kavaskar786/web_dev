const fs=require('fs')
fs.writeFile('sample.txt','hello mca b',(err)=>{
        console.log('content updated');
})

fs.readFile('sample.txt','utf-8',(err,data)=>{console.log(data)})

const path = require('path');
fs.writeFile(path.join(__dirname,'posts','blogPos.txt'),'Hello',(err)=>{
    if (err) {
        throw err;
    }
    console.log('file created');
});
/*
fs.unlink(path.join(__dirname,'/posts','blogPos.txt'),(err)=>{
    if (err) {
        throw err;
    }
    console.log('file deleted');
});
*/

fs.appendFile(path.join(__dirname,'posts','blogPos.txt'),'more data',(err)=>{
    if (err) {
        throw err;
    }
    console.log('file cintents updated');
});

fs.mkdir(path.join(__dirname,'/posts'),(err)=>{
    if (err) {
        console.log(err);
        console.log("folder with that name already exixts");
        return;
    }
    console.log('posts folder created');
});
