//Dependencies
const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
// const projectsController = require('../controllers/projectControllers')




//User Routes

// login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if(!user) res.send("there is no user with those credentials");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("You have successfully logged in!");
        console.log(req.user);
      });
  }
})(req, res, next);
});

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
    .populate("projects")
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
router.post('/signup', (req, res) => {

  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  
  const newUser = new User({
    username: req.body.username,
    password: encryptedPassword,
  });
    await newUser.save();
    res.send("User Created");
    };
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
