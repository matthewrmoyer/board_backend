exports.up = function(knex, Promise) {
  return knex.schema.createTable('board_user', table => {
    table.integer("board_id").index().references("id").inTable("board").onDelete("cascade").notNull()
    table.integer("user_id").index().references("id").inTable("users").onDelete("cascade").notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('board_user')
}