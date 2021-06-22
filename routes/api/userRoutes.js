//Dependencies
const router = require('express').Router();
const User = require('../../models/User.js');
// const projectsController = require('../controllers/projectControllers')


//User Routes

//Get all users
router.get("/api/user", (req, res) => {
    User.find({})
      .then(dbProject => {
        res.json(dbProject);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Get individual user
  router.get("/api/user/:id", (req, res) => {
    User.find({})
      .then(dbProject => {
        res.json(dbProject);
      })
      .catch(err => {
        res.json(err);
      });
  });


//Create user
router.post('api/user/', ({body}, res) => {
    const user = new User(body);
    user.setFullName();

    User.create(user)
        .then((dbProject) => {
            res.json(dbProject);
        })
        .catch((err) => {
            res.json(err);
        });
});

//Update user by id
router.put('api/user/:id', (req, res) => {
    let updates = req.body
    User.findByIdAndUpdate({_id: req.params.id}, updates,{new: true, runValidators: true})
    .then((dbProject) => {
        res.json(dbProject)
    })
    .catch((err) => {
        res.json(err)
    });
});

//delete user by ID  *not sure if needed. Maybe provide user option to close/disable account?
// router.delete('/api/user', ({ body }, res) => {
//     Project.findByIdAndDelete(body.id)
//     .then(()=> {
//         res.json(true);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// });


module.exports = router;
