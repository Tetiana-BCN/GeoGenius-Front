import styles from './Play.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { fetchQuizQuestion, fetchCountries } from '../../api/geoApi';

function Play() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    fetchCountries()
      .then((res) => setCountryList(res.data))
      .catch((err) => console.error('Error fetching countries:', err));
  }, []);

  const loadQuestion = () => {
    fetchQuizQuestion(mode, selectedCountries)
      .then((res) => {
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
          <label className={styles.modeSelector}>Choose quiz mode: </label>
          <div className={styles.container}>
            <select
              className={styles.mode}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="">Select Mode</option>
              <option value="capital">Guess the Capital</option>
              <option value="country">Guess the Country</option>
            </select>

            <Button
              className={styles.loadButton}
              onClick={loadQuestion}
              label="Load new question"
            />
          </div>
        </div>

        
        <div className={styles.container}>
          <label className={styles.modeSelector}>
            Choose up to 5 countries to practice:
          </label>
          <div className={styles.countryList}>
            {countryList.map((country) => (
              <label key={country} className={styles.countryCheckbox}>
                <input
                  type="checkbox"
                  value={country}
                  checked={selectedCountries.includes(country)}
                  onChange={() => toggleCountrySelection(country)}
                />
                {country}
              </label>
            ))}
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
      </main>

      <Footer />
    </div>
  );
}

export default Play;
