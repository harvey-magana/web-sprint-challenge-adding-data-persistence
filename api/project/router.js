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

router.post('/', (req, res) => {
    const projData = req.body;

    Project('project').insert(projData)
        .then(ids => {
            Project('project').where({ id: ids[0] })
                .then(newProjEntry => {
                    res.status(201).json(newProjEntry);
                })
        })
        .catch(err => {
            console.log('Post error', err);
            res.status(500).json({
                message: 'Faild to store the data.'
            })
        })
})

module.exports = router;