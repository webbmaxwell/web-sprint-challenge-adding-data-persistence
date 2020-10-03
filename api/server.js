const express = require('express');

const resourceRouter = require('../resources/resource-router');
const projectRouter = require('../projects/project-router');
const taskRouter = require('../tasks/task-router');

const server = express();

server.use(express.json());
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);
server.use('/api/projects/tasks', taskRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
})

module.exports = server;