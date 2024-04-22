import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
});

const Questions =
  mongoose.models.Questions || mongoose.model("Questions", questionSchema);

export default Questions;
