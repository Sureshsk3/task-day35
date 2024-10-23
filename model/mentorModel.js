import mongoose from "./index.js";
import validateEmail from "../helper/validateEmail.js"
const mentorSchema = new mongoose.Schema(
  {
    mentorName: {
      type: String,
      required: [true, "Name is Required"],
    },
    studentName: {
      type: Array,
      default: [],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid Email`,
      },
    },
  },
  {
    versionKey: false,
  }
);

export default new mongoose.model("mentors", mentorSchema);
