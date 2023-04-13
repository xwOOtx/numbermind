import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumberLayout from './NumberLayout'

function App() {
  const [correctGuess, setCorrectGuess] = useState(false);
  useEffect(() => {
    if (correctGuess) {
      alert('Congratulations! You have guess correctly!')
      window.location.reload();
    }
  }, [correctGuess])
  

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
        <NumberLayout key={index} answer={answer} setCorrectGuess={setCorrectGuess}></NumberLayout>
      )
      }
    </div>
  )
}

export default App
