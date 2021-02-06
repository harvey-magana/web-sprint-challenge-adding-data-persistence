// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.get('/', (req, res) => {
    Resource.get(req.query)
        .then(resrc => {
            res.status(200).json(resrc)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error retrieving resource.'
            })
        })
});

router.post('/', (req, res) => {
    Resource.insert(req.body)
        .then(resrc => {
            res.status(201).json(resrc)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error posting project.'
            })
        })
})

module.exports = router;