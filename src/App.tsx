import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import GuessDisplay from './GuessDisplay';
import SubmitDisplay from './SubmitDisplay';
import NumberLayout from './NumberLayout'

function App() {
  const [startGame, setStartGame] = useState(false);
  const [numberOfGuess, setNumberOfGuess] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState<number[][]>([])

  const guesses = 10;
  const answer: number[] = [];

  useEffect(() => {
    if (numberOfGuess == guesses ) {
      alert('Game Over!')
      setStartGame(false);
      window.location.reload();
    }
  }, [numberOfGuess])

  const addGuess = useCallback(
    () => {
      setNumberOfGuess(current => current + 1)
    },
    [numberOfGuess],
  )

  const submitAnswer = useCallback(
    (data: number[]) => {
      setSubmittedAnswer([data, ...submittedAnswer])
    },
    [submittedAnswer]
  );
  
  const randomAnswer = useMemo(() => {
    for (let i=0; i< 4; i++) {
      answer.push(Math.floor(Math.random()*10));
    }
    return answer;
  }, [])
  
  const onStartGame = () => {
    setStartGame(true);
  }

  return (
    <div className='App'>
      <h1>Number Mind</h1>
      {
        startGame ?
        <div className='content'>
        <GuessDisplay submittedAnswerList= { submittedAnswer }></GuessDisplay>
        <SubmitDisplay
          answer={ randomAnswer }
          onSubmittedAnswer={ submitAnswer }
          onAddGuess={ addGuess }></SubmitDisplay>
        </div> :
        <button className='startButton' onClick={onStartGame}>Start Game</button>
      }
      
    </div>
  )
}

export default App
