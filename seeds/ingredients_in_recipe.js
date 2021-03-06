
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, measurement: 1},
        {recipe_id: 1, ingredient_id: 2, measurement: 1},
        {recipe_id: 1, ingredient_id: 3, measurement: 1}, 
        {recipe_id: 2, ingredient_id: 4, measurement: 1}, 
        {recipe_id: 2, ingredient_id: 5, measurement: 1},
        {recipe_id: 2, ingredient_id: 6, measurement: 1},
        {recipe_id: 2, ingredient_id: 7, measurement: 1},
        {recipe_id: 3, ingredient_id: 8, measurement: 1},
        {recipe_id: 3, ingredient_id: 9, measurement: 1},
        {recipe_id: 3, ingredient_id: 10, measurement:1}
      ]);
    });
};
