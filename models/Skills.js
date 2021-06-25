const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema(
    {
        skills: {
            type: String,
            required: true
        }
    });

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;