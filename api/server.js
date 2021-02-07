// build your server here
const express = require('express');
const server = express();

const projectRouter = require('./project/router.js');
const resourceRouter = require('./resource/router.js');
const taskRouter = require('./task/router.js');

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Data Persistence Sprint</h2>`);
  });

module.exports = server;
