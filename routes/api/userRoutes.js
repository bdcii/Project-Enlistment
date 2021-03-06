//Dependencies
const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
// const projectsController = require('../controllers/projectControllers')
require("../../passportConfig")
// const passportLocal = require("passport-local").Strategy;


// router.post("/login", 
// passport.authenticate("local", (req, res) => {
//   res.redirect("/")
// }



//User Routes

// login route
router.post("/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) res.json(err);
    if (!user) res.send("there is no user with those credentials");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // res.send("You have successfully logged in!");
        // console.log(req.user);
        // return res.redirect("/");
        res.json(user);
      });
    }
  })(req, res, next);
});

// if !req.user then 
router.get("/current-user", (req, res) => {
  if (!req.user) { res.status(404).send() } else {
    res.json(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  }
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
    console.log(doc);
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const encryptedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        github: req.body.github,
        linkedin: req.body.linkedin,
        password: encryptedPassword
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

//route to update members of project
router.put('/member_Of/:id', (req, res) => {
  let updates = req.body
  console.log(req.body);
  User.findByIdAndUpdate({ _id: req.params.id },
    updates,
    { new: true, runValidators: true })
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

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/")
});

module.exports = router;
