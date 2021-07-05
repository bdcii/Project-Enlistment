const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {

        _creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
        comment: [{
            type: String,
            ref: 'Comment'
        }],
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        size: {
            type: Number
        },
        apply: [{
            type: Schema.ObjectId,
        }]
    })

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
