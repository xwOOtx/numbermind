import React, { ChangeEvent, useState } from 'react'
import './App.css'

interface Props {
  answer: number[],
  onAddGuess: any,
  onSubmittedAnswer: any
}

const SubmitDisplay = (props: Props) => {
  const answer = props.answer;
  const [numArray, setNumArray] = useState<number[]>([]);
  
  const onNumButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (numArray.length > 4) return;
    const num = parseInt(e.currentTarget.textContent!);
    setNumArray(current => [...current, num]);
  }

  const onDeleteButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (numArray.length === 0) return;
    const copy = [...numArray]
    copy.pop();
    setNumArray(copy);
  }

  const submit = () => {
    /// check for correct numbers
    let numberCount = 0;
    const correctNumberArray = [...answer];

    if (numArray.length < 4) {
      alert('Invalid input')
      return
    }

    numArray.map((num) => {
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
      if (answer[i] == numArray[i]) {
        positionCount++;
      }
    }
    
    if (positionCount==4) {
      alert(`Congratulations! You have guessed the number ${answer.join("")} correctly!`)
      window.location.reload();
    }

    const arrayToSubmit = [...numArray, numberCount, positionCount];

    props.onSubmittedAnswer(arrayToSubmit)
    props.onAddGuess();
    setNumArray([]);
  }

  return (
    <div className='display'>
      <h2> Rules </h2>
      <p>
        Guess the 4 digit number within 10 tries.
      </p>
      <br/>
      <div className='numberInput'>
        <div>{numArray[0]}</div>
        <div>{numArray[1]}</div>
        <div>{numArray[2]}</div>
        <div>{numArray[3]}</div>
        <button onClick={submit}>submit</button>
      </div>
      <div className='numPad'>
        <div className='numButton' onClick={onNumButtonClick}>1</div>
        <div className='numButton' onClick={onNumButtonClick}>2</div>
        <div className='numButton' onClick={onNumButtonClick}>3</div>
        <div className='numButton' onClick={onNumButtonClick}>4</div>
        <div className='numButton' onClick={onNumButtonClick}>5</div>
        <div className='numButton' onClick={onNumButtonClick}>6</div>
        <div className='numButton' onClick={onNumButtonClick}>7</div>
        <div className='numButton' onClick={onNumButtonClick}>8</div>
        <div className='numButton' onClick={onNumButtonClick}>9</div>
        <div className='numButton' onClick={onNumButtonClick}>0</div>
        <div className='numButton' onClick={onDeleteButtonClick}>X</div>
      </div>
    </div>
  )
}

export default SubmitDisplay