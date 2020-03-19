exports.up = function(knex)
{
    return knex.schema.createTable("ingredients", table=>
    {
        table.increments().unique().notNullable();

        table.text("ingredient").unique().notNullable();
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists("ingredients");
};