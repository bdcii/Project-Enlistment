const User = require('./User');
const Project = require('./Project');

Project.hasOne(User, {
  foreignKey: 'user_id'
});

User.hasMany(Project, {
  foreignKey: 'project_id'
});

module.exports = {
  Project: require("./Project"),
  User: require("./User")
};
