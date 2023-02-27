const fs=require("fs");
/**
 * 
 * @param {Error} error 
 * @param {buffer} fileData 
 * @returns void
 */
function readFirstFiveCallback(error,fileData){
    if(error){
        console.error(error);
        return;
    }
    const Lines=fileData.toString().split("\n");
    Lines.slice(0,5).forEach((line) => {
        console.log(line);

    });
}
fs.readFile("./hello.txt",readFirstFiveCallback);