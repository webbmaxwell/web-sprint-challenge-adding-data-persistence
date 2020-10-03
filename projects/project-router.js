const router = express('express').Router();

const db = require("../data/dbConfig");

router.get('/api/projects', (req, res) => {
    db('projects')
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ error: 'Unable to retrieve projects', err })
        })
})

router.post('/api/projects', (req, res) => {
    const newProject = req.body;

    db('projects')
        .insert(newProject)
        .then(project => {
            res.status(200).json({ message: 'Successfully added project' })
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add project', err})
        })
})

module.exports = router;

//     -   [X] adding projects.
//     -   [X] retrieving a list of projects.