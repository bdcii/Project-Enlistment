const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {

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
        comment: {
            type: String,
            references: {
                model: 'user',
                key: 'id'
            }
        },

        user_id: {
            type: Number
        },

        date: {
            type: Date, default: Date.now
        }
    });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
