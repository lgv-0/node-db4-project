const express = require("express");
const server = express();

server.use(express.json());

const Retrivers = require("./knex/maindb");

server.get("/", (req, res)=>
{
    res.status(200).send("ok");
});

server.get("/recipes", (req, res)=>
{
    Retrivers.getRecipes().then((response)=>
    {
        res.status(200).send(response);
    }).catch((error)=>
    {
        console.log(error);
        res.status(500).send("Internal server error");
    })
});

server.listen(5000);