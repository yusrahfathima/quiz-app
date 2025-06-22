import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Fetch questions on load
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/quiz");
      setQuestions(res.data);
    } catch (error) {
      console.error("Error loading questions:", error);
    }
  };

  const handleOptionChange = (value, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (question && options.every((opt) => opt !== "")) {
      try {
        await axios.post("http://localhost:5000/api/quiz", {
          question,
          options,
          correctAnswer,
        });
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectAnswer(0);
        fetchQuestions();
        alert("Question added successfully");
      } catch (err) {
        console.error("Error adding question:", err);
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/quiz/${id}`);
      fetchQuestions();
    } catch (err) {
      console.error("Error deleting question:", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h2>Add a Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        {options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(e.target.value, i)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
        ))}
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(Number(e.target.value))}
          style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
        >
          {options.map((_, i) => (
            <option key={i} value={i}>
              Correct Answer: Option {i + 1}
            </option>
          ))}
        </select>
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Add Question
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h3>All Questions</h3>
      <ul>
        {questions.map((q) => (
          <li key={q._id} style={{ marginBottom: "15px" }}>
            <strong>{q.question}</strong>
            <ul>
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  style={{
                    color: i === q.correctAnswer ? "green" : "black",
                    fontWeight: i === q.correctAnswer ? "bold" : "normal",
                  }}
                >
                  {opt}
                </li>
              ))}
            </ul>
            <button onClick={() => handleDelete(q._id)} style={{ marginTop: "5px" }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
