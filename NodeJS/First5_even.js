//create call =back fun ction that will read first 5 even no from file contening 10even no
const fs= require("fs").promises;

async function readFirst5Even(){
    const file=await fs.readFile("./");
    //converting file which buffer to string and splitting by line
    const line=file/toString().split("\n");
    //iterating on top five lines
    for(let i=0;i<5;i++){
        console.log(line[i]);
    }

    readFirst5Even();