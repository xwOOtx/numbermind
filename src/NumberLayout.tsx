import React, { ChangeEvent, useState } from 'react'
import './App.css'

interface Props {
  answer: number[],
  setCorrectGuess: React.Dispatch<React.SetStateAction<boolean>>
}

const NumberLayout = (props: Props) => {
  const answer = props.answer;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [inputOne, setInputOne] = useState<number>();
  const [inputTwo, setInputTwo] = useState<number>();
  const [inputThree, setInputThree] = useState<number>();
  const [inputFour, setInputFour] = useState<number>();
  const [correctNumber, setCorrectNumber] = useState<number>();
  const [correctPosition, setCorrectPosition] = useState<number>();
  
  const onInputOneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputOne(Number(e.target.value.replace(/\D/g, '')));
  }
  const onInputTwoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTwo(Number(e.target.value.replace(/\D/g, '')));
  }
  const onInputThreeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputThree(Number(e.target.value.replace(/\D/g, '')));
  }
  const onInputFourChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFour(Number(e.target.value.replace(/\D/g, '')));
  }

  const submitGuess = () => {
    
    /// check for correct numbers
    let numberCount = 0;
    const correctNumberArray = [...answer];


    const guessArray = [inputOne, inputTwo, inputThree, inputFour];
    const allFalsy = guessArray.includes(undefined);
    if (allFalsy) {
      alert('Invalid input')
      return
    }

    guessArray.map((num) => {
      if (num == undefined) {
        return
      }
      if (correctNumberArray.includes(num)) {
        numberCount++;
        correctNumberArray.splice(correctNumberArray.findIndex(e => e == num),1);
      }
    });
    setCorrectNumber(numberCount);

    /// check for correct position
    let positionCount = 0;
    for (let i=0; i<4; i++) {
      if (answer[i] == guessArray[i]) {
        positionCount++;
      }
    }
    setCorrectPosition(positionCount);
    
    if (positionCount==4) props.setCorrectGuess(true);

    setIsSubmitted(true);
  }

  return (
    <div className='numberLayout'>
      <input name="inputOne" maxLength={1} disabled={isSubmitted} onChange={onInputOneChange} value={inputOne}></input>
      <input name='inputTwo' maxLength={1} disabled={isSubmitted} onChange={onInputTwoChange} value={inputTwo}></input>
      <input name='inputThree' maxLength={1} disabled={isSubmitted} onChange={onInputThreeChange} value={inputThree}></input>
      <input name='inputFour' maxLength={1} disabled={isSubmitted} onChange={onInputFourChange} value={inputFour}></input>
      <label>{ correctNumber }</label>
      <label>{ correctPosition}</label>
      <button onClick={submitGuess} disabled={isSubmitted}>submit</button>
    </div>
  )
}

export default NumberLayout