
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'test1@gmail.com',
          name: 'test1'
        },
        {
          email: 'test2@gmail.com',
          name: 'test2'
        },
        {
          email: 'test3@gmail.com',
          name: 'test3'
        },
        {
          email: 'test4@gmail.com',
          name: 'test4'
        }
      ]);
    });
};
