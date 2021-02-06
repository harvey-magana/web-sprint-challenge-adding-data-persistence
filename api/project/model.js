// build your `Project` model here
const db = require('../../data/dbConfig.js');


module.exports = {
    get,
    getById,
    insert
  };


async function get() {
    const project = await db('projects').toString();

    //const project = await db('projects');
    return project;
}

async function getById(id) {
    const [account] = await db('projects').where({ id });
    return account;
}

async function insert(data) {
    const [accountId] = await db('projects').insert(data);
    const account = await getById(accountId);
    return account;
}
