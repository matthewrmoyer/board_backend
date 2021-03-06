exports.up = function(knex, Promise) {
  return knex.schema.createTable('board', table => {
    table.increments("id").primary();
    table.string("name").notNullable()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
    table.integer("creator").index().references("id").inTable("users").onDelete("cascade").notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('board')
}