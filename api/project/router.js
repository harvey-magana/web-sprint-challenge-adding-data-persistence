// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model');



// add GET and POST methods here for project endpoints

router.get('/', (req, res) => {
    Project.get(req.query)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving project.'
            })
        })
});

router.get('/:id', (req, res) => {
    Project.getById(req.params.id)
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => {
            error: 'Failed to retrieve project by id.'
        })
})

router.post('/', (req, res) => {
    Project.insert(req.body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error posting project.'
            })
        })
})


module.exports = router;