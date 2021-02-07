
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([   
    { project_name: 'Plan wedding', project_description: 'Completing the wedding plans', project_completed: 0 },
    { project_name: 'Plan reception', project_description: 'Plan the wedding receiption', project_completed: 0  }
  ]);
};


