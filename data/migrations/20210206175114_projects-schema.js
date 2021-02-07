
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('project_description', 128);
        tbl.string('project_completed').notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .notNullable()
            .unique();
        tbl.integer('resource_description')
            .unsigned()
            .notNullable()
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('tasks_description', 128)
            .notNullable();
        tbl.string('task_notes');
        tbl.string('task_completed')
            .notNullable();
        tbl.integer('project_id')
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned().notNullable()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
