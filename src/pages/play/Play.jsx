import styles from './Play.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { fetchQuizQuestion } from '../../api/geoApi';

function Play() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [savedQuestions, setSavedQuestions] = useState([]);


  const [mode, setMode] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const correctResponses = [
    'Correct! You are a genius!',
    'Great answer! Keep it up!',
    "Spot on! You're crushing it!",
    'Right again — geography champ!',
    "Nice job! You're on fire!"
  ];

  const wrongResponses = [
    'Oops! Not quite, try again.',
    'Almost! Give it another go.',
    'Wrong answer, but don’t give up!',
    'That’s not it. Keep trying!',
    "Nope! You'll get the next one!"
  ];

  const saveCurrentQuestion = () => {
  if (!question || options.length === 0) return;

  const quizData = {
    question,
    options,
    correctAnswer,
  };

  const alreadySaved = savedQuestions.some(
    (q) => q.question === quizData.question
  );

  if (alreadySaved) {
    alert('This question is already saved.');
    return;
  }

  
  if (savedQuestions.length >= 5) {
    alert('You can only save up to 5 questions.');
    return;
  }

  setSavedQuestions((prev) => [...prev, quizData]);
  console.log('Question saved:', quizData);
};


  

  // useEffect(() => {
  //   fetchCountries()
  //     .then((res) => setCountryList(res.data))
  //     .catch((err) => console.error('Error fetching countries:', err));
  // }, []);

  const loadQuestion = () => {
    fetchQuizQuestion()
      .then((res) => {
        console.log('Quiz data:', res.data);
        setQuestion(res.data.question);
        setCorrectAnswer(res.data.correctAnswer);
        setOptions(res.data.options);
        setSelected(null);
        setFeedback('');
      })
      .catch((err) => console.error('Error fetching quiz question:', err));
  };

  const handleAnswer = (answer) => {
    setSelected(answer);
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    if (answer === correctAnswer) {
      setFeedback(getRandom(correctResponses));
      setScore((prev) => prev + 1);
    } else {
      setFeedback(getRandom(wrongResponses));
    }
  };

  const toggleCountrySelection = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else if (selectedCountries.length < 5) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <div className={styles.playWrapper}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Games for Geography Geniuses</h1>

        
        <div style={{ marginBottom: '1rem' }}>
          
          <div className={styles.container}>
              <Button
              className={styles.loadButton}
              onClick={loadQuestion}
              label="New question"
            />
            
            <Button
  className={styles.mode}
  onClick={saveCurrentQuestion}
  label="Save this question"
  disabled={savedQuestions.length >= 5}
/>


          
          </div>
        </div>

        
        
       
        <div className={styles.quizBox}>
          <p className={styles.question}>{question}</p>
          <div className={styles.options}>
            {options.map((option, index) => (
              <Button
                key={index}
                className={`${styles.optionBtn} ${selected === option ? styles.selected : ''}`}
                onClick={() => handleAnswer(option)}
                text={option}
              />
            ))}
          </div>
          <p className={styles.feedback}>{feedback}</p>
          <p className={styles.score}>Score: {score}</p>
        </div>

        <div className={styles.savedQuestions}>
  <h3 className={styles.modeSelector}>Saved Questions</h3>
  {savedQuestions.map((item, index) => (
    <div key={index} className={styles.savedItem}>
      <p><strong>Q:</strong> {item.question}</p>
      <ul>
        {item.options.map((opt, i) => (
          <li key={i} style={{ color: opt === item.correctAnswer ? 'green' : 'black' }}>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  ))}
  <button
      className={styles.removeButton}
      onClick={() =>
        setSavedQuestions((prev) =>
          prev.filter((_, i) => i !== index)
        )
      }
    >
      Remove
    </button>
</div>

      </main>

      <Footer />
    </div>
  );}

export default Play;
