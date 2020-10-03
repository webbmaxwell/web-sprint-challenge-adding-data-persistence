const { table } = require("../dbConfig");

exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name', 'mediumtext').unique().notNullable();
      tbl.text('resource', 128).notNullable();
      tbl.text('task', 128).notNullable();
      tbl.boolean('complete').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
