
import {readFile,writeFile} from 'fs';
import {fileUrlToPath} from url;
const_filename=fileUrlToPath(import.meta.url);
console.log(__dirname);
readFile(path.join(__dirnmae,'databasr,employees','emp.Json'),'utf-8',(err,data)=>{ if(err)throw err;
    let customers=Json.parse(data);
    writeFile(path.join(__dirname,'util','customers.json'),Json.stringify(customers),'utf-8,',(err,data)=>{
        if(err) throw err;
        console.log("data written successfully");
    })
});