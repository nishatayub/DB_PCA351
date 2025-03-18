const express = require("express");
const app = express();
const Port = process.env.PORT;

app.use(express.json());

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
});