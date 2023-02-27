const fs=require("fs"); 
//fs: file stream
function readUTF8_File(filePath)
{
    fs.readFile(filePath,"utf-8", (data,error)=>{
        if(error)
        {
            console.error(error);
            return;
        }
        console.log(data);
    });
}
readUTF8_File("./Test2.txt");
