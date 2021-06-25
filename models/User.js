// This needs to be completed //
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
<<<<<<< HEAD
    // required: "Enter your first name"
=======
    required: "Enter your first name"
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
  },
  lastName: {
    type: String,
    trim: true,
<<<<<<< HEAD
    // required: "Enter your last name"
=======
    required: "Enter your last name"
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
  },
  email: {
    type: String,
    trim: true,
    unique: true,
<<<<<<< HEAD
    // required: "Enter your email address",
=======
    required: "Enter your email address",
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
<<<<<<< HEAD
    // required: "Password is Required",
=======
    required: "Password is Required",
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  github: {
    type: String,
    trim: true,
<<<<<<< HEAD
    // required: "Enter your GitHub page"
=======
    required: "Enter your GitHub page"
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
  },
  linkedin: {
    type: String,
    trim: true,
<<<<<<< HEAD
    // required: "Enter your LinkedIn page"
  },
  // projects: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Project"
  //   }
  // ],
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill"
=======
    required: "Enter your LinkedIn page"
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
>>>>>>> 272d8070ade893748364291a5be315a61ab4a5bc
    }
  ],
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