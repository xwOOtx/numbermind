import { useEffect, useState } from 'react'
import './App.css'
import NumberLayout from './NumberLayout'

function App() {
  const [correctGuess, setCorrectGuess] = useState(false);
  const [numberOfGuess, setNumberOfGuess] = useState(0);

  useEffect(() => {
    if (correctGuess) {
      alert('Congratulations! You have guess correctly!')
      window.location.reload();
    }
  }, [correctGuess])

  useEffect(() => {
    if (numberOfGuess == guesses ) {
      alert('Game Over!')
      window.location.reload();
    }
  }, [numberOfGuess])

  const guesses = 10;
  const answer: number[] = [];
  
  for (let i=0; i< 4; i++) {
    answer.push(Math.floor(Math.random()*10));
  }

  return (
    <div className="App">
      <h1>Number Mind</h1>
      <div>
        {
          answer.map((num, index) => 
            correctGuess && <label key={index}>{answer[index]}</label>
          )
        }
      </div>
      <div className='title'>
        <h2>Guesses</h2>
        <h3>Correct Number</h3>
        <h3>Correct Position</h3>
      </div>
      {
        Array(guesses)
          .fill(0)
          .map((num, index) => 
        <NumberLayout 
          key={index} 
          answer={answer} 
          setCorrectGuess={setCorrectGuess}
          setNumberOfGuess={setNumberOfGuess}></NumberLayout>
      )
      }
    </div>
  )
}

export default App
