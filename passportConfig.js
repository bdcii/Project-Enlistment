const User = require('./models/User');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');


module.exports = function(passport) {
passport.use(new localStrategy(
    function(username, password, done) {
        console.log(username);
        console.log(password);
      User.findOne({ username: username }, function (err, user) {
        console.log(user);
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        bcrypt.compare(password, user.password, (err, result) => {
        console.log(result);
        if (err) throw err;
        if (result === true) {
        return done(null, user); 
          } else {
            return done(null, false);
          }
      });
    });
}));
// passport.use(
//     new localStrategy((username, password, done) => {
//         console.log("you are starting your strategy")
//         User.findOne({ username: username }, (err, user) => {
//             if (err) throw err;
//             if (!user) return done(null, false);
//             bcrypt.compare(password, user.password, (err, result) => {
//                 if (err) throw err;
//                 if (result === true) {
//                     return done(null, user);
//             } else {
//                 return done(null, false);
//             }
//             });
//         });


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

passport.serializeUser((user, cb) => {
    console.log("howdy", user);
    cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
    User.findOne({_id: id }, (err, user) => { 
        const userInformation = {
            username: user.username,
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            github: user.github,
            linkedin: user.linkedin,
            skills: user.skills,
            projects: user.projects

        };
        cb(err, userInformation);
        });
    });
};