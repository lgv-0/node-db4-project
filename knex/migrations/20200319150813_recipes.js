exports.up = function(knex)
{
    return knex.schema.createTable("recipes", table=>
    {
        table.increments().unique().notNullable();

        table.text("name").unique().notNullable();
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("recipes");
};