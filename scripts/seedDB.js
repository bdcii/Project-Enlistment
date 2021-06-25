const mongoose = require("mongoose");
const db = require("../models");

// This file creates and seeds the DB

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectenlistment"
);

const projectSeed = [
  {
    title: "Project-Enlistment",
    description: "An application to find developers that are interested in working on a project.",
    open: true,
    dev_Need: 5,
    date: new Date(Date.now()),
    user_id: 1
  },
  {
    title: "Weather application",
    description: "An application that diplays weather information. In need of developers who are skilled at API and styling.",
    open: true,
    dev_Need: 5,
    comment: "I love working with API's and front-end development.",
    date: new Date(Date.now()),
    user_id: 2
  },
  {
    title: "Portfolio Website",
    description: "An application to display portfolios. Please only apply if you are a React guru and have strong communication skills.",
    open: true,
    dev_Need: 3,
    // comment: "Call me the King of React! And don't get me started on communication - I love to communicate!",
    date: new Date(Date.now()),
    user_id: 3
  },
  {
    title: "Tech Blog",
    description: "A website that one can discuss topics in technology.",
    open: true,
    dev_Need: 3,
    // comment: "My skills include React bootstrap, React, JS, and project management.",
    date: new Date(Date.now()),
    user_id: 5
  },
  {
    title: "Game Website",
    description: "A webite for games.",
    open: true,
    dev_Need: 4,
    date: new Date(Date.now()),
    user_id: 4
  },
];

const userSeed = [
  {
    firstName: "Sean",
    lastName: "Fitzmartin",
    email: "sfitzmartin22@gmail.com",
    password: "22seanfitz22",
    github: "sfitzmartin22",
    linkedin: "sfitzmartin"
  },
  {
    firstName: "Tim",
    lastName: "Smith",
    email: "tsmith@gmail.com",
    password: "22seanfitz22",
    github: "tsmith1",
    linkedin: "tsmith",
    skills: ["Bootstrap", "React", "React-Bootstrap", "Python", "JavaScript", "Project Management"]
  },
  {
    firstName: "Scott",
    lastName: "Jones",
    email: "sjones@gmail.com",
    password: "22seanfitz22",
    github: "sjones2",
    linkedin: "sjones",
    skills: ["React", "Bootstrap", "Python", "SQL", "NoSQL", "Project Management"]
  },
  {
    firstName: "Theresa",
    lastName: "Jacobs",
    email: "tjacobs@gmail.com",
    password: "22seanfitz22",
    github: "tjacobs1",
    linkedin: "tjacobs"
  },
  {
    firstName: "Sally",
    lastName: "Sugar",
    email: "ssugar@gmail.com",
    password: "22seanfitz22",
    github: "ssugar1",
    linkedin: "ssugar"
  },
];

const skillSeed = [
  {
    skills: "HTML"
  },
  {
    skills: "CSS"
  },
  {
    skills: "JavaScript"
  },
  {
    skills: "Bootstrap"
  },
  {
    skills: "Python"
  },
  {
    skills: "SQL"
  },
  {
    skills: "React"
  },
  {
    skills: "React-Bootstrap"
  },
  {
    skills: "MongoDB"
  },
  {
    skills: "Angular"
  },
  {
    skills: "Express"
  },
  {
    skills: "Communication"
  },
  {
    skills: "Project Management"
  },
  {
    skills: "Time Management"
  },
  {
    skills: "Organization"
  }
]

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Skills
  .remove({})
  .then(() => db.Skills.collection.insertMany(skillsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
