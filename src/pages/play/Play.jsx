import styles from './Play.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { fetchQuizQuestion } from '../../api/geoApi';


function Play() {
  
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
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
  
  useEffect(() => {
    loadQuestion();
  }, []);

  const [mode, setMode] = useState("");

  const loadQuestion = () => {
    fetchQuizQuestion(mode)
      .then((res) => {
        setQuestion(res.data.question);
        setCorrectAnswer(res.data.correctAnswer);
        setOptions(res.data.options);
        setSelected(null);
        setFeedback("");
      })
      .catch((err) => console.error("Error:", err));
  };
  

  /*const loadQuestion = () => {
    fetchQuizQuestion()
      .then((res) => {
        const { country, correctCapital, options } = res.data;
        setQuestion(`What is the capital of ${country}?`);
        setCorrectAnswer(correctCapital);
        setOptions(options); 
        setSelected(null);
        setFeedback("");
      })
      .catch((err) => console.error("Failed to fetch quiz question:", err));
  };
*/

    const handleAnswer = (answer) => {
    setSelected(answer);
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    if (answer === correctAnswer) {
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
        <div style={{ marginBottom: "1rem" }}>
  <label className={styles.modeSelector}>Choose quiz mode: </label>
  <select
    id={styles.modeSelector}
    value={mode}
    onChange={(e) => setMode(e.target.value)}
  >
    <option className={styles.findCapital}>Guess the Capital</option>
    <option className={styles.findCountry}>Guess the Country</option>
  </select>
  <button onClick={loadQuestion} style={{ marginLeft: "1rem" }}>
    Load New Question
  </button>
</div>

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