const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema(
    {
        skills: {
            type: String,
            required: false,
            user: [{
                type: Schema.ObjectId,
                ref: 'User'
            }]
        }
    });

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = Skills;