const router = require('express').Router();
const Project = require('../../models/Project.js');
// const projectsController = require('../controllers/projectControllers')

//route for project by id
//get, put,post & delete (with authorization)


// get all projects //
router.get("/", (req, res) => {
    Project.find({})
    .then((dbProject) => {
        res.json(dbProject);
    })
    .catch((err) => {
        res.json(err);
    });
});

// get project by id //
router.get("/:id", (req, res) => {
    Project.findById(req.params.id)
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
    Project.findByIdAndUpdate({_id: req.params.id}, 
    updates,
    {new: true, runValidators: true}
    )
    .then((dbProject) => {
        res.json(dbProject)
    })
    .catch((err) => {
        res.json(err)
    });
});

//delete object by ID //
router.delete('/:id', (req, res) => {
    Project.findById({_id: req.params.id})
    .then(dbProject => dbProject.remove())
    .then(dbProject => res.json(dbProject))
    .catch(err => 
        res.statsus(422).json(err));
    });


module.exports = router;

// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;
