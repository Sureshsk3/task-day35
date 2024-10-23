import mentorModel from "../model/mentorModel.js";

const getMentor = async (req, res) => {
  try {
    const mentors = await mentorModel.find({}, {});
    res
      .status(200)
      .json({ message: "Mentor Data fetched Successful", data: mentors });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getOneMentor = async (req, res) => {
  try {
    const mentor = await mentorModel.findOne({ _id: req.headers.id });
    if (mentor) {
      res
        .status(200)
        .json({ message: "Mentor Data fetched Successful", data: mentor });
    } else {
      res.status(400).json({ message: "Mentor Not Available" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createMentor = async (req, res) => {
  try {
    const mentor = await mentorModel.findOne({
      email: req.body.email,
    });

    if (mentor) {
      res.status(400).json({ message: "Mentor Already Available" });
    } else {
      await mentorModel.create(req.body);
      res.status(201).json({ message: "Mentor Created Successful" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const editMentor = async (req, res) => {
  try {
    const mentor = await mentorModel.findOne({ _id: req.headers.id });
    if (!mentor) {
      res.status(400).json({ message: "Mentor Not Available" });
    } else {
      mentor._id,
        mentor.mentorName,
        mentor.studentName.push(req.body.studentName);
      await mentor.updateOne(mentor);
      res.status(200).json({ message: "Mentor Edited Successful" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  getMentor,
  getOneMentor,
  createMentor,
  editMentor,
};
