const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectenlistment"
);

const projectSeed = [
  {
    id: 1,
    title: "Project-Enlistment",
    description: "An application to find developers that are interested in working on a project.",
    open: true,
    dev_Need: 5,
    date: new Date(Date.now()),
    user_id: 1
  },
  {
    id: 2,
    title: "Weather application",
    description: "An application that diplays weather information.",
    open: true,
    dev_Need: 5,
    date: new Date(Date.now()),
    user_id: 2
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "An application to display portfolios",
    open: true,
    dev_Need: 3,
    date: new Date(Date.now()),
    user_id: 3
  },
  {
    id: 5,
    title: "Tech Blog",
    description: "A website that one can discuss topics in technology.",
    open: true,
    dev_Need: 3,
    date: new Date(Date.now()),
    user_id: 5
  },
  {
    id: 3,
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
    id: 1,
    firstName: "Sean",
    lastName: "Fitzmartin",
    email: "sfitzmartin22@gmail.com",
    password: "22seanfitz22",
    github: "sfitzmartin22",
    linkedin: "sfitzmartin"
  },
  {
    id: 2,
    firstName: "Tim",
    lastName: "Smith",
    email: "tsmith@gmail.com",
    password: "22seanfitz22",
    github: "tsmith1",
    linkedin: "tsmith"
  },
  {
    id: 3,
    firstName: "Scott",
    lastName: "Jones",
    email: "sjones@gmail.com",
    password: "22seanfitz22",
    github: "sjones2",
    linkedin: "sjones"
  },
  {
    id: 4,
    firstName: "Theresa",
    lastName: "Jacobs",
    email: "tjacobs@gmail.com",
    password: "22seanfitz22",
    github: "tjacobs1",
    linkedin: "tjacobs"
  },
  {
    id: 5,
    firstName: "Sally",
    lastName: "Sugar",
    email: "ssugar@gmail.com",
    password: "22seanfitz22",
    github: "ssugar1",
    linkedin: "ssugar"
  },
];

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
