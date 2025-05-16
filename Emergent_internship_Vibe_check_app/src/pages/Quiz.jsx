import React, { useState } from "react";
import { QUESTIONS } from "../constants/questions";
import { motion } from "framer-motion";

const getRandomQuestions = (allQuestions, count = 10) => {
  return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, count);
};

const vibeDescriptions = {
  zen: "🧘 You're a Zen Master – calm, centered, and in flow.",
  grind: "💼 You're a Hustler – productivity is your middle name.",
  chaotic: "🤪 Chaotic Good – spontaneous, unpredictable, and fun.",
  lazy: "🛋 Certified Chill – no stress, no mess, just vibes.",
};

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [vibeResult, setVibeResult] = useState("");

  const startQuiz = () => {
    setQuestions(getRandomQuestions(QUESTIONS));
    setQuizStarted(true);
    setAnswers([]);
    setVibeResult("");
  };

  const handleAnswer = (qid, vibe) => {
    const newAnswers = answers.filter((a) => a.id !== qid);
    setAnswers([...newAnswers, { id: qid, vibe }]);
  };

  const submitQuiz = () => {
    const counts = {};
    answers.forEach(({ vibe }) => {
      counts[vibe] = (counts[vibe] || 0) + 1;
    });

    const topVibe = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    setVibeResult(vibeDescriptions[topVibe]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">🧠 Vibe Check Quiz</h1>

        {!quizStarted && (
          <div className="text-center mt-10">
            <button
              onClick={startQuiz}
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
            >
              Start the Quiz
            </button>
          </div>
        )}

        {quizStarted && !vibeResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-gray-800 rounded-xl p-4 shadow-md space-y-2"
              >
                <h2 className="text-xl font-semibold">
                  {idx + 1}. {q.question}
                </h2>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(q.id, opt.vibe)}
                      className={`rounded-lg px-4 py-2 border hover:bg-indigo-500 ${
                        answers.find((a) => a.id === q.id && a.vibe === opt.vibe)
                          ? "bg-indigo-600 border-indigo-500"
                          : "border-gray-600"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {answers.length === questions.length && (
              <div className="text-center">
                <button
                  onClick={submitQuiz}
                  className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
                >
                  Submit
                </button>
              </div>
            )}
          </motion.div>
        )}

        {vibeResult && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-indigo-800 rounded-xl p-6 text-center shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-4">✨ Your Vibe:</h2>
            <p className="text-xl">{vibeResult}</p>
            <button
              onClick={startQuiz}
              className="mt-6 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Retake Quiz
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;