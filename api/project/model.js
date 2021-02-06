// build your `Project` model here
const db = require('../../data/dbConfig.js');


module.exports = {
    get,
    getById,
    insert
  };


async function get() {
    const project = await db('projects');

    return project;
}

async function getById(id) {
    const [project] = await db('projects').where({ id });
    return project;
}

async function insert(data) {
    const [projectId] = await db('projects').insert(data);
    const project = await getById(projectId);
    return project;
}
