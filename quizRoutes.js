const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/", quizController.getQuestions);
router.post("/", quizController.addQuestion);
router.delete("/:id", quizController.deleteQuestion);

module.exports = router;
