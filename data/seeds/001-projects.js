
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Clean Kitchen', resource: 'broom', task: 'sweep', complete: false },
      ]);
    });
};
