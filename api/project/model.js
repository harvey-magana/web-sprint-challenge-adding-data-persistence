// build your `Project` model here
const db = require('../../data/dbConfig.js');


module.exports = {
    get,
    getById,
    insert
  };


async function get() {
    const project = await db('project').toString();

    //const project = await db('project');
    return project;
}

async function getById(id) {
    const [account] = await db('project').where({ id });
    return account;
}

async function insert(data) {
    const [accountId] = await db('project').insert(data);
    const account = await getById(accountId);
    return account;
}
