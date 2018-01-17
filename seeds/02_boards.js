
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('board').del()
    .then(function () {
      // Inserts seed entries
      return knex('board').insert([
        {
          name: "Grocery List",
          creator: 1
        },
        {
          name: "Ice Cream Ratings",
          creator: 1
        },
        {
          name: "Todos",
          creator: 1
        },
        {
          name: "Laptops",
          creator: 2
        },
        {
          name: "Best Board Games List",
          creator: 3
        },
       {
          name: "Christmas",
          creator: 4
        },
       {
          name: "Kayaks",
          creator: 4
        },
      ]);
    });
};
