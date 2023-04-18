import React, { ChangeEvent, useState } from 'react'
import './App.css'

interface Props {
  answer: number[],
  onAddGuess: any,
  onSubmittedAnswer: any
}

const SubmitDisplay = (props: Props) => {
  const answer = props.answer;
  const [inputOne, setInputOne] = useState<number>();
  const [inputTwo, setInputTwo] = useState<number>();
  const [inputThree, setInputThree] = useState<number>();
  const [inputFour, setInputFour] = useState<number>();
  
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

  const submit = () => {
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


    /// check for correct position
    let positionCount = 0;
    for (let i=0; i<4; i++) {
      if (answer[i] == guessArray[i]) {
        positionCount++;
      }
    }
    
    if (positionCount==4) {
      alert(`Congratulations! You have guessed the number ${answer.join("")} correctly!`)
      window.location.reload();
    }

    const arrayToSubmit = [inputOne, inputTwo, inputThree, inputFour, numberCount, positionCount];

    props.onSubmittedAnswer(arrayToSubmit)
    props.onAddGuess();
  }

  return (
    <div className='display'>
        <div className='numberInput'>
        <input name="inputOne" maxLength={1} onChange={onInputOneChange} value={inputOne}></input>
        <input name='inputTwo' maxLength={1} onChange={onInputTwoChange} value={inputTwo}></input>
        <input name='inputThree' maxLength={1} onChange={onInputThreeChange} value={inputThree}></input>
        <input name='inputFour' maxLength={1} onChange={onInputFourChange} value={inputFour}></input>
        <button onClick={submit}>submit</button>
      </div>
    </div>
  )
}

export default SubmitDisplay