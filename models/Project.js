const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {

        _creator: [{
            type: Schema.ObjectId,
            ref: 'User'
        }],
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
        comment: [{
            type: String,
            ref: 'Comment'
        }],
        apply: [{
            type: Schema.ObjectId,
            ref: 'User'
        }],

        date: {
            type: Date, default: Date.now
        }
    });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
