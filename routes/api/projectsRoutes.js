const router = require('express').Router();
const Project = require('../../models/Project');
// const projectsController = require('../controllers/projectControllers')

//route for project by id
//get, put,post & delete (with authorization)


// get all projects //
router.get("/", (req, res) => {
    Project.find({})
        .then((dbProject) => {
            console.log(dbProject);
            res.json(dbProject);
        })
        .catch((err) => {
            res.json(err);
        });
});

// get project by id //
router.get("/:id", (req, res) => {
    Project.findById(req.params.id)
        .populate("users")
        .then((dbProject) => {

            res.json(dbProject);
        })
        .catch((err) => {
            res.json(err);
        })
})



// create project //
router.post('/', (req, res) => {
    Project.create(req.body)
        // .populate("users")
        .then((dbProject) => {
            res.json(dbProject);
        })
        .catch((err) => {
            res.json(err);
        });
});

// update only the description of project - wll add all the other updates after we get this seeded //
router.put('/:id', (req, res) => {
    let updates = req.body
    Project.findByIdAndUpdate({ _id: req.params.id },
        updates,
        { new: true, runValidators: true }
    )
        .then((dbProject) => {
            res.status(200).json(dbProject)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
});

//delete object by ID //
router.delete('/:id', (req, res) => {
    Project.findById({ _id: req.params.id })
        .then(dbProject => dbProject.remove())
        .then(dbProject => res.json(dbProject))
        .catch(err =>
            res.statsus(422).json(err));
});

//delete developer from Apply field
router.put('/apply/:id', (req, res) => {
    let updates = req.body
    console.log(req.body);
    Project.findByIdAndUpdate({ _id: req.params.id },
        updates,
        { new: true, runValidators: true })
        .then(dbProject => res.json(dbProject))
        .catch(err =>
            res.status(422).json(err));
});


module.exports = router;

