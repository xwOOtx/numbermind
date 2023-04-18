import React, { useState } from 'react'
import './App.css'
import GuessPanel from './GuessPanel'

interface Props {
  submittedAnswerList: number[][]
}

const GuessDisplay = (props: Props) => {

  return (
    <div className='display'>
      <div className='title'>
        <h5>Guesses</h5>
        <h5>Correct Number</h5>
        <h5>Correct Position</h5>
      </div>
      {
        props.submittedAnswerList.map((answer, index) => (
          <GuessPanel submittedAnswer={answer} key={index}></GuessPanel>
        ))
      }
    </div>
  )
}

export default GuessDisplay