const router = require('express').Router();
const Project = require('../models/Project.js');
// const projectsController = require('../controllers/projectControllers')

//route for project by id
//get, put,post & delete (with authorization)


// get all projects //
router.get("/api/projects", (req, res) => {
    Project.find({})
    .then((dbProject) => {
        res.json(dbProject);
    })
    .catch((err) => {
        res.json(err);
    });
});

// get project by id //
router.get("/api/projects/:id", (req, res) => {
    Project.findById({})
})


// create project //
router.post('api/projects/', (req, res) => {
    Project.create({})
        .then((dbProject) => {
            res.json(dbProject);
        })
        .catch((err) => {
            res.json(err);
        });
});

// update only the description of project - wll add all the other updates after we get this seeded //
router.put('api/projects/:id', ({ body, params }, res) => {
    Project.findByIdAndUpdate(
    params.id,
    { $push: { description: body }},
    
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
router.delete('/api/projects', ({ body }, res) => {
    Project.findByIdAndDelete(body.id)
    .then(()=> {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
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
