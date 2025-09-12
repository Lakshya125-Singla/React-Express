import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import "../App.css";

const QUOTES = [
  "The quick brown fox jumps over the lazy dog",
  "React makes it painless to create interactive UIs",
  "JavaScript is the language of the web",
  "Typing fast requires practice and patience",
  "Code is like humor. When you have to explain it, it’s bad"
];

function TypingTest() {
  const [time, setTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quote, setQuote] = useState("");
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || { wpm: 0, accuracy: 0 }
  );

  const textareaRef = useRef(null);

  // Pick random quote
  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, [time]);

  // Countdown effect
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [isRunning, timeLeft]);

  // Accuracy check against quote
  useEffect(() => {
    if (isRunning) {
      let correctChars = 0;
      const charsTyped = text.length;

      for (let i = 0; i < charsTyped; i++) {
        if (text[i] === quote[i]) correctChars++;
      }

      setAccuracy(charsTyped > 0 ? Math.round((correctChars / charsTyped) * 100) : 100);
      setWordCount(text.trim().split(/\s+/).filter((w) => w !== "").length);
    }
  }, [text, isRunning, quote]);

  const startGame = () => {
    setIsRunning(true);
    setTimeLeft(time);
    setText("");
    setWordCount(0);
    setAccuracy(100);
    setShowConfetti(false);
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    textareaRef.current.focus();
  };

  const endGame = () => {
    setIsRunning(false);
    const finalWPM = wordCount * (60 / time);
    const newScore = { wpm: finalWPM, accuracy };

    // Save best score
    if (newScore.wpm > bestScore.wpm) {
      localStorage.setItem("bestScore", JSON.stringify(newScore));
      setBestScore(newScore);
    }

    setShowConfetti(true);
  };

  return (
    <div className="typing-container">
      {showConfetti && <Confetti recycle={false} numberOfPieces={250} />}

      {/* Time Selection */}
      <div className="time-options">
        {[15, 30, 60].map((t) => (
          <button
            key={t}
            className={`time-btn ${time === t ? "active" : ""}`}
            onClick={() => setTime(t)}
            disabled={isRunning}
          >
            {t}s
          </button>
        ))}
      </div>

      {/* Timer */}
      <div className="timer-circle">
        <svg className="circle" viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle-progress"
            strokeDasharray={`${(timeLeft / time) * 100}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="circle-text">{timeLeft}s</span>
      </div>

      {/* Quote to Type */}
      <div className="quote-box">
        {quote.split("").map((char, i) => (
          <span
            key={i}
            className={
              i < text.length
                ? text[i] === char
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {char}
          </span>
        ))}
      </div>

      {/* Typing Box */}
      <textarea
        ref={textareaRef}
        disabled={!isRunning || timeLeft === 0}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing here..."
        className={`textarea ${isRunning ? "active" : ""}`}
      />

      {/* Controls */}
      <div className="buttons">
        <button onClick={startGame} disabled={isRunning} className="start-btn">
          Start 🚀
        </button>
        <button onClick={endGame} disabled={!isRunning} className="stop-btn">
          Stop ❌
        </button>
      </div>

      {/* Stats */}
      <div className="stats">
        <p>📝 Words: <strong>{wordCount}</strong></p>
        <p>⚡ Speed: <strong>{isRunning ? wordCount * (60 / (time - timeLeft)) : wordCount * (60 / time)} WPM</strong></p>
        <p>🎯 Accuracy: <strong>{accuracy}%</strong></p>
      </div>

      {/* Best Score */}
      <div className="best-score">
        🏆 Best Score → {bestScore.wpm} WPM ({bestScore.accuracy}% Accuracy)
      </div>

      {/* Result */}
      {!isRunning && timeLeft === 0 && (
        <div className="result scale-in">
          <h3>✅ Test Finished!</h3>
          <p>Words Typed: <strong>{wordCount}</strong></p>
          <p>Speed: <strong>{wordCount * (60 / time)} WPM</strong></p>
          <p>Accuracy: <strong>{accuracy}%</strong></p>
          <button onClick={startGame} className="restart-btn">Restart 🔄</button>
        </div>
      )}
    </div>
  );
}

export default TypingTest;
