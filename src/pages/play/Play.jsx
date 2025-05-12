import styles from './Play.module.css';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Play() {
  const [question, setQuestion] = useState("What is the capital of France?");
  const [options, setOptions] = useState(["Paris", "Berlin", "Madrid", "Rome"]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (answer) => {
    setSelected(answer);
    setFeedback(answer === "Paris" ? "Correct!" : "Try again!");
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
