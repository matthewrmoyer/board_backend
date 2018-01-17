exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments()
    table.string("email").notNullable()
    table.string("name").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
}
