import React from 'react'
import './App.css'

interface Props {
  submittedAnswer: number[]
}

const GuessPanel = (props: Props) => {
  const array = [...props.submittedAnswer];
  return (
    <div className='guessPanel'>
      <div className='numberPanel'>
        <div>{ array[0] }</div>
        <div>{ array[1] }</div>
        <div>{ array[2] }</div>
        <div>{ array[3] }</div>
      </div>
      <div className='resultPanel'>
        <div>{ array[4] }</div>
        <div>{ array[5] }</div>
      </div>




      {/* <div>{ array[0] }</div>
      <div>{ array[1] }</div>
      <div>{ array[2] }</div>
      <div>{ array[3] }</div>
      <span></span>
      <div>{ array[4] }</div>
      <div>{ array[5] }</div> */}
      {/* <div className='guessNumber'>
        <div>{array[0]}</div>
        <div>{array[1]}</div>
        <div>{array[2]}</div>
        <div>{array[3]}</div>
      </div>
      <div className='guessResult'>
        <div> correct number</div>
        <div> correct position</div>
      </div> */}
    </div>
  )
}

export default GuessPanel