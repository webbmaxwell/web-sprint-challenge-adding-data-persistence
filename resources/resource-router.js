const router = express('express').Router();

const db = require("../data/dbConfig");

router.get('/api/resources', (req, res) => {
    db('resources')
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({ error: 'Unable to retrieve resources', err })
        })
})

router.post('/api/resources', (req, res) => {
    const newResource = req.body;

    db('resources')
        .insert(newResource)
        .then(resource => {
            res.status(200).json({ message: 'Successfully added resource' })
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add resource', err})
        })
})

module.exports = router;

//     -   [X] adding resources.
//     -   [X] retrieving a list of resources.