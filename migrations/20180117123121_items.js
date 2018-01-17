exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', table => {
    table.increments("id").primary();
    table.integer("board_id").index().references("id").inTable("board").onDelete("cascade").notNull()
    table.text("value").notNullable()
    table.boolean("is_complete")
    table.string("completed_by")
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item')
}