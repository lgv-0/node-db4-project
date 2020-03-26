const DB = require("knex")(require("../knexfile").development);

function getRecipes()
{
    return DB("recipes").select("*");
}

function getShoppingList(recipe_id)
{
    return DB.from("recipes as Recipe")
        .where("Recipe.id", recipe_id)
        .join("ingredients_recipes_join as RecipeJoiner", "RecipeJoiner.recipe", "=", "Recipe.id")
        .join("ingredients as Ingredient", "Ingredient.id", "=", "RecipeJoiner.ingredient")
        .select("Ingredient.ingredient", "RecipeJoiner.amount");
}

module.exports =
    {
        getRecipes,
        getShoppingList
    }