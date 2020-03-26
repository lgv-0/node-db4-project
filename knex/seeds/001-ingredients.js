exports.seed = function(knex)
{
  return knex('ingredients').del()
    .then(function ()
    {
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Flour'},
        {id: 2, ingredient: 'Sugar'},
        {id: 3, ingredient: 'Table Salt'},
        {id: 4, ingredient: 'Butter'},
        {id: 5, ingredient: 'Egg'}
      ]);
    });
};
