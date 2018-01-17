
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('board_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('board_user').insert([
        {board_id: 1, user_id: 1},
        {board_id: 1, user_id: 2},
        {board_id: 1, user_id: 3},
        {board_id: 1, user_id: 4},
        {board_id: 2, user_id: 2},
        {board_id: 2, user_id: 3},
        {board_id: 2, user_id: 4},
        {board_id: 3, user_id: 3},
        {board_id: 4, user_id: 4},
        {board_id: 5, user_id: 1},
        {board_id: 6, user_id: 1},
        {board_id: 7, user_id: 2}
      ]);
    });
};
