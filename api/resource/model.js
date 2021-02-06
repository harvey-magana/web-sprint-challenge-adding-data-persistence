// build your `Resource` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    get,
    insert
  };

async function get() {
    const project = await db('resources');
    return project;
}

async function insert(data) {
    const [resourceId] = await db('resources').insert(data);
    const resource = await getById(resourceId);
    return resource;
}