
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { resource_name: 'phone', resource_description: 'call' }, 
    { resource_name: 'email', resource_description: 'send email' }, 
    { resource_name: 'phone', resource_description: 'call' }, 
    { resource_name: 'email', resource_description: 'send email' }, 
    { resource_name: 'phone', resource_description: 'call' }, 
    { resource_name: 'phone', resource_description: 'call' }
  ]);
};
