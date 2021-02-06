// build your `Task` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    get,
    insert
  };

  async function get() {
    const task = await db('tasks');
    return task;
}

async function insert(data) {
    const [taskId] = await db('tasks').insert(data);
    const task = await getById(taskId);
    return task;
}