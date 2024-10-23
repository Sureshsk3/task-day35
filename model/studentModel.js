import mongoose from "./index.js";
import validateEmail from "../helper/validateEmail.js"
const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid Email`,
      },
    },
    mentorName: {
      type: String,
      default: ""
    },
    previousMentorsName: {
      type: Array,
      default: []
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model("students", studentSchema);
