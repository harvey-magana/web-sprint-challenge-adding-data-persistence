
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    { task_description: 'contact the minister', task_notes: 'do not email him', task_completed: 0, project_id: 1 }, 
    { task_description: 'buy flowers', task_notes: 'please include deposit', task_completed: 0, project_id: 1 }, 
    { task_description: 'book the chapel', task_notes: null, task_completed: 0, project_id: 1 }, 
    { task_description: 'schedule catering', task_notes: 'include deposit', task_completed: 0, project_id: 2 }, 
    { task_description: 'book the band', task_notes: null, task_completed: 0, project_id: 2 }, 
    { task_description: 'contact the minister', task_notes: 'do not email him', task_completed: 0, project_id: 1 }
  ]);
};
