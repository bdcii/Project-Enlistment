import axios from "axios";

export default {
  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },
  // Updates a project comment with the given id
  updateProjectComment: function (id, comment) {
    return axios.put("/api/projects/" + id, { comment });
  },


  //remove applicant from project
  removeProjectApply: function (id, userId) {
    console.log(userId)
    return axios.put("/api/projects/" + id, { $pull: { apply: userId } });
  },

  //add Developer to project.  Needs to get Project ID, as well as the project property of the User document
  updateProjectMembership: function (id, projectId) {
    console.log(projectId)
    return axios.put("/api/users/member_Of/" + id, { member_Of: projectId });
  },

  //add Developer to the applicant array
  updateProjectApplicant: function (id, userId) {
    return axios.put("/api/projects/" + id, {$push: { apply: userId }})
  },

  //Update project status
  updateProjectStatus: function (id, status) {
    return axios.put("/api/projects/" + id, { open: status });
  },
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/users/current-user");
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  userLogin: function (userData) {
    return axios.post('/api/users/login', userData)
  },

  userLogout: function () {
    return axios.get('/api/users/logout')
  }
};