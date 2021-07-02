// This needs to be completed //
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
    // required: "Enter your first name"
  },
  lastName: {
    type: String,
    trim: true,
    // required: "Enter your last name"
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Enter your email address",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  github: {
    type: String,
    trim: true,
    // required: "Enter your GitHub page"
  },
  linkedin: {
    type: String,
    trim: true,
    // required: "Enter your LinkedIn page"
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skills"
    }
  ],
  stars: {
    type: [Number]
  },
  // availability: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Availability"
  //   }
  // ],

  // fullName: String


});

// UserSchema.methods.setFullName = function() {
//     this.fullName = `${this.firstName} ${this.lastName}`;

//     return this.fullName;
//   };

const User = mongoose.model("User", userSchema);

module.exports = User;