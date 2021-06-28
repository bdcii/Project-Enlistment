//Dependencies
const router = require('express').Router();
const User = require('../../models/User.js');
// const projectsController = require('../controllers/projectControllers')


//User Routes

//Get all users
router.get("/", (req, res) => {
  User.find({})
    .populate("projects")
    .then(dbProject => {
      res.json(dbProject);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get individual user
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(dbProject => {
      res.json(dbProject);
    })
    .catch(err => {
      res.json(err);
    });
});

//working on potential route for getting project by user/creator ID
// router.get('/profile', async (req, res) => {
//   req.params.project = Schema.ObjectId(req.params.creator)

//   const project = await Project.FindbyId(req.params.project)
//   project.creator = req.params.creator
//   project.save()
//   res.json(project)
// });

//Create user
router.post('/', (req, res) => {
  // const user = new User(body);
  // user.setFullName();

  User.create(req.body)
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Update user by id
router.put('/:id', (req, res) => {
  let updates = req.body
  User.findByIdAndUpdate({ _id: req.params.id }, updates, { new: true, runValidators: true })
    .then((dbProject) => {
      res.json(dbProject)
    })
    .catch((err) => {
      res.json(err)
    });
});

// delete user by ID  *not sure if needed. Maybe provide user option to close/disable account?
router.delete('/:id', (req, res) => {
  User.findById({ _id: req.params.id })
    .then(dbUser => dbUser.remove())
    .then(dbUser => res.json(dbUser))
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
