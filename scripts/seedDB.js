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
    size: 5,
    comment: "Great idea.",
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    _creator: "",
    apply: [],
    skills: ["Bootstrap", "React", "React-Bootstrap", "JavaScript", "Project Management"],
    technologies: "React, JavaScript, Bootstrap, MongoDB"
  },
  {
    title: "Weather application",
    description: "An application that displays weather information. In need of developers who are skilled at API and styling.",
    open: true,
    size: 5,
    comment: "I love working with API's and front-end development.",
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    _creator: "",
    apply: [],
    skills: ["Bootstrap", "JavaScript", "CSS", "Project Management"],
    technologies: "HTML, CSS, JavaScript, Bootstrap, API"
  },
  {
    title: "Portfolio Website",
    description: "An application to display portfolios. Please only apply if you are a React guru and have strong communication skills.",
    open: true,
    size: 3,
    comment: "Call me the King of React! And don't get me started on communication - I love to communicate!",
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    _creator: "",
    apply: [],
    skills: ["Bootstrap", "React", "React-Bootstrap", "JavaScript", "Project Management"]
  },
  {
    title: "Tech Blog",
    description: "A website where developers and tech geeks can discuss topics in technology.",
    open: true,
    size: 3,
    comment: "My skills include React bootstrap, React, JS, and project management.",
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    _creator: "",
    apply: [],
    skills: ["Bootstrap", "MongoDB", "Express", "JavaScript", "Time Management"]
  },
  {
    title: "Game Website",
    description: "A website for fun and addicting games. Check out our games and forget about all those boring chores!",
    open: true,
    size: 4,
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
    _creator: "",
    apply: []
  },
];

const userSeed = [
  {
    firstName: "Sean",
    lastName: "Fitzmartin",
    username: "sfitzmartin",
    email: "sfitzmartin22@gmail.com",
    password: "22seanfitz22",
    github: "https://github.com/sfitzmartin22",
    linkedin: "https://www.linkedin.com/in/sfitzmartin",
    member_Of:[],
    skills: ["Bootstrap", "React", "React-Bootstrap", "Python", "JavaScript", "Project Management"],
    projects: [],
    stars: [5, 5, 4, 3, 3, 3.5, 4]
  },
  {
    firstName: "Tim",
    lastName: "Smith",
    username: "tsmith",
    email: "tsmith@gmail.com",
    password: "22seanfitz22",
    github: "https://github.com/tsmith1",
    linkedin: "https://www.linkedin.com/in/tsmith",
    member_Of:[],
    skills: ["Bootstrap", "React", "React-Bootstrap", "Python", "JavaScript", "Project Management"],
    projects: [],
    stars: [5, 5, 4, 1, 2.5, 3, 1.5, 4]
  },
  {
    firstName: "Scott",
    lastName: "Jones",
    username: "sjones",
    email: "sjones@gmail.com",
    password: "22seanfitz22",
    github: "https://github.com/sjones2",
    linkedin: "https://www.linkedin.com/in/sjones",
    member_Of:[],
    skills: ["React", "Bootstrap", "Python", "SQL", "NoSQL", "Project Management"],
    projects: [],
    stars: [5, 5, 3, 3, 3, 3.5, 4]
  },
  {
    firstName: "Theresa",
    lastName: "Jacobs",
    username: "tjacobs",
    email: "tjacobs@gmail.com",
    password: "22seanfitz22",
    github: "https://github.com/tjacobs1",
    member_Of:[],
    linkedin: "https://www.linkedin.com/in/tjacobs",
    skills: ["HTML", "CSS", "Bootstrap", "Python", "SQL", "NoSQL", "Project Management"],
    projects: [],
    stars: [5, 5, 3, 3, 3, 1.5, 1]
  },
  {
    firstName: "Sally",
    lastName: "Sugar",
    username: "ssugar",
    email: "ssugar@gmail.com",
    password: "22seanfitz22",
    github: "https://github.com/ssugar1",
    linkedin: "https://www.linkedin.com/in/ssugar",
    member_Of:[],
    skills: ["HTML", "CSS", "Bootstrap", "Angular", "SQL", "NoSQL", "Project Management"],
    projects: [],
    stars: [5, 5, 3, 3, 3, 3.5, 4]
  },
];

const skillsSeed = [
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
