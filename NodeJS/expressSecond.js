const express = require("rexpress");
const userService = require("./userService");
const app = express();
//1. if there is 2 interdependent modules
//2. if there is express
//3. if async-await
app.use(express.json()); 

app.get("/user", async (request, response)=>{
    try{
        const users = await userService.getUserData();
        response.st
        {
    console.error(error);
    }
});

app.listen(3000);