import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(''); //Sets answer
  const [isRight, setIsRight] = useState(false); //Display if user is right or wrong
  const [message, setMessage] = useState(''); //Display message if user has it right or wrong
  const colors = ['#9C334E', '#5607EE', '#C7DF67']; //Random colors to guess

  // Checks the user input if answer is correct
  const checkAnswer = (guess) => {
    if (guess === answer) {
      setMessage('Right Answer!!!');
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      setIsRight(true);
      setAnswer(randomColor);
    } else {
      setMessage('Wrong Answer');
      setIsRight(false);
    }
  };

  useEffect(() => {
    // Generate a random color as answer
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setAnswer(randomColor);
  }, []);

  return (
    <>
      <h1>Color Guessing Game</h1>

      <div
        style={{
          backgroundColor: answer,
        }}
        className='game-bord'
      ></div>

      <div>
        {colors.map((color, i) => (
          <button
            type='button'
            key={i}
            value={color}
            onClick={() => checkAnswer(color)}
          >
            {color}
          </button>
        ))}
      </div>

      {message.length > 0 && (
        <div>
          <p style={{ color: isRight ? 'green' : 'red' }}>{message}</p>
        </div>
      )}
    </>
  );
}

export default App;
