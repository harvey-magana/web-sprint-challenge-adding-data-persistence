
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').insert([
    { project_id: 1, resource_id: 1 },

  ]);
};
