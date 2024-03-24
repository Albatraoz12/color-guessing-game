import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState(''); //Sets answer
  const [isRight, setIsRight] = useState(false); //Display if user is right or wrong
  const [message, setMessage] = useState(''); //Display message if user has it right or wrong
  const colors = ['#9C334E', '#5607EE', '#C7DF67']; //Random colors to guess

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
