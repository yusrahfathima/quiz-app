import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAnswer = (i) => {
    if (questions[index]?.correctAnswer === i) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      localStorage.setItem("score", score + (i === questions[index]?.correctAnswer ? 1 : 0));
      navigate("/result");
    }
  };

  if (!questions.length) return <p style={{ textAlign: "center" }}>Loading questions...</p>;

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>Q{index + 1}: {questions[index].question}</h2>
      {questions[index].options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(i)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
