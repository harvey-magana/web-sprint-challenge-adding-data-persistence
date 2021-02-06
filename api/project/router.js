// build your `/api/projects` router here
const express = require('express');

const Project = require('./model.js');

const router = express.Router();

// add GET and POST methods here for project endpoints

router.get('/', (req, res) => {
    Project('project')
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve project.'
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Project('project').where({ id }).first()
        .then(proj => {
            res.json(proj);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve project by id.'
            })
        })
})

module.exports = router;