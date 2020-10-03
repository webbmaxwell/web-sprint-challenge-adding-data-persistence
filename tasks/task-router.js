const router = express('express').Router();

const db = require("../data/dbConfig");

router.get('/api/projects/tasks', (req, res) => {
    db('tasks')
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({ error: 'Unable to retrieve tasks', err })
        })
})

router.post('/api/projects/tasks', (req, res) => {
    const newTask = req.body;

    db('tasks')
        .insert(newTask)
        .then(task => {
            res.status(200).json({ message: 'Successfully added task' })
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to add task', err})
        })
})

module.exports = router;

//     -   [X] adding tasks.
//     -   [X] retrieving a list of tasks. **The list of tasks should include the project name and project description**.