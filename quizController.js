const Question = require('../models/Question');

// Get all quiz questions
exports.getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

// Add a new question
exports.addQuestion = async (req, res) => {
  const { question, options, correctAnswer } = req.body;
  const newQuestion = new Question({ question, options, correctAnswer });
  await newQuestion.save();
  res.json({ message: "Question added" });
};




// Delete a question
exports.deleteQuestion = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: "Question deleted" });
};

// Add sample questions
exports.addSampleQuestions = async (req, res) => {
  const sampleQuestions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Chennai", "Delhi", "Kolkata"],
      correctAnswer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: 1
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HighText Machine Language",
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "None of these"
      ],
      correctAnswer: 1
    }
  ];

  await Question.insertMany(sampleQuestions);
  res.json({ message: "Sample questions added" });
};
