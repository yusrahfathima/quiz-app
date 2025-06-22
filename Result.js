import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const score = localStorage.getItem("score");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Quiz Completed 🎉</h2>
      <h3>Your Score: {score}</h3>
      <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
