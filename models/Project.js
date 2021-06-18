const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
id: {
    type: Number
},
title: {
    type: String, 
    required: true 
},
description: { 
    type: String, 
    required: true 
},
open: {
    type: Boolean
},
dev_Need: {
    type: Number
},
manager: {
    type: Boolean
},
comment: {
    type: String
},

User_id: {
    type: Number
}

});


// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
