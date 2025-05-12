import styles from './Play.module.css';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Play() {
  const [question, setQuestion] = useState("What is the capital of France?");
  const [options, setOptions] = useState(["Paris", "Berlin", "Madrid", "Rome"]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const correctResponses = [
    "Correct! You are a genius!",
    "Great answer! Keep it up!",
    "Spot on! You're crushing it!",
    "Right again — geography champ!",
    "Nice job! You're on fire!"
  ];
  
  const wrongResponses = [
    "Oops! Not quite, try again.",
    "Almost! Give it another go.",
    "Wrong answer, but don’t give up!",
    "That’s not it. Keep trying!",
    "Nope! You'll get the next one!"
  ];
  

  const handleAnswer = (answer) => {
    setSelected(answer);
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
    if (answer === "Paris") {
      setFeedback(getRandom(correctResponses));
    } else {
      setFeedback(getRandom(wrongResponses));
    }
  };
  

  return (
    <div className={styles.playWrapper}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Games for Geography Geniuses</h1>
        
        <div className={styles.quizBox}>
          <p className={styles.question}>{question}</p>
          <div className={styles.options}>
            {options.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionBtn} ${selected === option ? styles.selected : ""}`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className={styles.feedback}>{feedback}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Play;
