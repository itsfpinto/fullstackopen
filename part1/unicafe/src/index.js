import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (title) => {
    return (
        <div>
            <h1>{title.title}</h1>
        </div>
    )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({type, text}) => {
  return (
    <div>{text} {type}</div>
  )
}

const AverageScore = ({good, bad, total, text}) => {
  if (!total) {
    return <div>{text} 0</div>
  }
  else return (
      <div>{text} {(good*1+bad*-1)/total}</div>
    )
}
 
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const statisticBundle = {
    bundle: [
      {
        name: "good",
        count: good
      },
      {
        name: "neutral",
        count: neutral
      },
      {
        name: "bad",
        count: bad
      }
    ]
  }

  console.log(statisticBundle)

  const mainTitle = "give feedback"
  const statisticsTitle = "statistics"

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header title={mainTitle} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header title={statisticsTitle} />
      <Statistics type={good} text='good'/>
      <Statistics type={neutral} text='neutral'/>
      <Statistics type={bad} text='bad'/>
      <Statistics type={total} text='total'/>
      <AverageScore good={good} bad={bad} total={total} text="average" />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)