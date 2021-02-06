// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require('./model');

router.get('/', (req, res) => {
    Task.get(req.query)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving task.'
            })
        })
});

router.post('/', (req, res) => {
    Task.insert(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error posting task.'
            })
        })
})

module.exports = router;
