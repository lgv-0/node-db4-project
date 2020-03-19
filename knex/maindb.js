const DB = require("knex")(require("../knexfile").development);

function getRecipes()
{
    return DB("recipes").select("*");
}

module.exports =
    {
        getRecipes
    }