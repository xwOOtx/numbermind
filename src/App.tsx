import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import NumberLayout from './NumberLayout'

function App() {
  const [numberOfGuess, setNumberOfGuess] = useState(0);

  useEffect(() => {
    if (numberOfGuess == guesses ) {
      alert('Game Over!')
      window.location.reload();
    }
  }, [numberOfGuess])

  const addGuess = useCallback(
    () => {
      setNumberOfGuess(current => current + 1)
    },
    [numberOfGuess],
  )
  

  const guesses = 10;
  const answer: number[] = [];
  
  const randomAnswer = useMemo(() => {
    for (let i=0; i< 4; i++) {
      answer.push(Math.floor(Math.random()*10));
    }
    return answer;
  }, [])
  

  return (
    <div className="App">
      <h1>Number Mind</h1>
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
          answer={randomAnswer}
          addGuess={addGuess}></NumberLayout>
      )
      }
    </div>
  )
}

export default App
