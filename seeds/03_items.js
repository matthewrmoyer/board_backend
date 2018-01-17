
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          board_id: 1,
          value: "Milk",
          is_complete: true,
          completed_by: "test1"
        },
        {
          board_id: 1,
          value: "eggs",
          is_complete: false
        },
        {
          board_id: 1,
          value: "Cheese",
          is_complete: false
        },
        {
          board_id: 2,
          value: "Little Man is delicious"
        },
        {
          board_id: 2,
          value: "Cold Stone was OK"
        },
        {
          board_id: 3,
          value: "Laundry",
          is_complete: true,
          completed_by: "test2"
        },
        {
          board_id: 3,
          value: "Mop",
          is_complete: true,
          completed_by: "test2"
        },
        {
          board_id: 3,
          value: "Get Coffee",
          is_complete: true,
          completed_by: "test1"
        },
        {
          board_id: 4,
          value: "Mac",
        },
       {
          board_id: 5,
          value: "Monopoly",
        },
       {
          board_id: 6,
          value: "Get dad a laptop",
          is_complete: true,
          completed_by: "test3"
        },
       {
          board_id: 7,
          value: "Pelican Sit on top",
        },
      ]);
    });
};
