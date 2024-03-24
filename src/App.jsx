import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(''); //Sets answer
  const [isRight, setIsRight] = useState(false); //Display if user is right or wrong
  const [message, setMessage] = useState(''); //Display message if user has it right or wrong

  // Memoize the colors array
  const colors = useMemo(() => ['#9C334E', '#5607EE', '#C7DF67'], []);

  // Checks the user input if answer is correct
  const checkAnswer = (guess) => {
    if (guess === answer) {
      setMessage('Right Answer!');
      setIsRight(true);

      // Clear the message and reset the game state after 2 seconds
      setTimeout(() => {
        setMessage('');
        setIsRight(false);

        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        setAnswer(randomColor);
      }, 1000);
    } else {
      setMessage('Wrong Answer');
      setIsRight(false);
    }
  };

  useEffect(() => {
    // Generate a random color at render
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setAnswer(randomColor);
  }, [colors]);

  return (
    <>
      <h1>Color Guessing Game</h1>

      <div
        style={{
          backgroundColor: answer,
        }}
        className='game-bord'
      ></div>

      <div className='btn-container'>
        {colors.map((color, i) => (
          <button
            className='btn'
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
