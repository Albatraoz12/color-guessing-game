import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(''); //Sets answer
  const [isRight, setIsRight] = useState(false); //Display if user is right or wrong
  const [message, setMessage] = useState(''); //Display message if user has it right or wrong
  const colors = ['#9C334E', '#5607EE', '#C7DF67']; //Random colors to guess

  useEffect(() => {
    // Generate a random color as answer
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setAnswer(randomColor);
  }, []);

  return (
    <>
      <h1>Color Guessing game!! :D</h1>

      <div
        style={{
          backgroundColor: answer,
          height: '20rem',
          width: '35rem',
        }}
      ></div>
    </>
  );
}

export default App;
