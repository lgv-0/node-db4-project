exports.seed = function(knex)
{
  return knex('ingredients_recipes_join').del()
    .then(function ()
    {
      return knex('ingredients_recipes_join').insert([
        {ingredient: 1, recipe: 1, amount: 2.5},
        {ingredient: 2, recipe: 1, amount: 4},
        {ingredient: 3, recipe: 1, amount: 0.25},
        {ingredient: 4, recipe: 1, amount: 14},
        {ingredient: 5, recipe: 1, amount: 1}
      ]);
    });
};
