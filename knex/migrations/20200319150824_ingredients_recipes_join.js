exports.up = function(knex)
{
    return knex.schema.createTable("ingredients_recipes_join", table=>
    {
        table.integer("ingredient").references("ingredients.id");

        table.integer("recipe").references("recipes.id");

        table.float("amount").notNullable();
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("ingredients_recipes_join");
};