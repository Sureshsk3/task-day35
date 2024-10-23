import studentModel from "../model/studentModel.js";
import mentorModel from "../model/mentorModel.js"
const getAllStudent = async (req, res) => {
  try {
    const student = await studentModel.find({}, {});
    if (!student) {
      res.status(400).json({ message: "Student Not Available" });
    } else {
      res
        .status(201)
        .json({ message: "Student Fetched Successful", data: student });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getStudent = async (req, res) => {
  try {
    const student = await studentModel.findOne({ _id: req.body.id });
    if (!student) {
      res.status(400).json({ message: "Student Not Available" });
    } else {
      res
        .status(201)
        .json({ message: "Student Fetched Successful", data: student });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createStudent = async (req, res) => {
  try {
    const student = await studentModel.findOne({ email: req.body.email });
    const mentor = await mentorModel.findOne({
      mentorName:req.body.mentorName
    })
    if (student) {
      res.status(400).json({ message: "Student Already Exisits" });
    } else if(mentor) {
      
      await studentModel.create(req.body);
      res.status(201).json({ message: "Student Created Successful" });
    }else{
      res.status(400).json({ message: "Mentor Not Available" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const editStudent = async (req, res) => {
  try {
    const student = await studentModel.findOne({ _id: req.headers.id });
    const prevMentor = student.mentorName

    if (!student) {
      res.status(400).json({ message: "Student Not Available" });
    } else {
      student._id, 
      student.studentName, 
      student.mentorName = req.body.mentorName;
      student.previousMentorsName.push(prevMentor,req.body.mentorName)
      await student.updateOne(student)      
      res
        .status(201)
        .json({ message: "Student Fetched Successful", data: student });
    }
  } catch (error) {    
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getAllStudent,
  getStudent,
  createStudent,
  editStudent,
};
