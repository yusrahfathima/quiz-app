const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  correctAnswer: Number  // index of correct option (0–3)
});

module.exports = mongoose.model('Question', questionSchema);
