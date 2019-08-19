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

const Statistics = (bundle) => {
  var isEmpty = true;
  for(var i = 0; i < bundle.bundle.length; i++) {
    if (bundle.bundle[i].count !== 0) isEmpty = false;
  }
  if (isEmpty) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else 
    return (
      <tbody>
        <tr><StatisticsParts name={bundle.bundle[0].name} count={bundle.bundle[0].count} /></tr>
        <tr><StatisticsParts name={bundle.bundle[1].name} count={bundle.bundle[1].count} /></tr>
        <tr><StatisticsParts name={bundle.bundle[2].name} count={bundle.bundle[2].count} /></tr>
        <tr><StatisticsParts name={bundle.bundle[3].name} count={bundle.bundle[3].count} /></tr>
      </tbody>
  )
}

const StatisticsParts = (bundle) => {
  return (
    <td>{bundle.name} {bundle.count}</td>
  )
}

const AverageScore = (bundle) => {
  var isEmpty = true;
  for(var i = 0; i < bundle.bundle.length; i++) {
    if (bundle.bundle[i].count !== 0) isEmpty = false;
  }
  if (isEmpty) {
    return (
      <div></div>
    )
  }
  else if (!bundle.bundle[3].count) {
    return <tr><td>{bundle.bundle[4].name} 0</td></tr>
  }
  else return (
    <tr><td>{bundle.bundle[4].name}</td><td>{(bundle.bundle[0].count*1+bundle.bundle[2].count*-1) / bundle.bundle[3].count}</td></tr>
    )
}

const PositiveScore = (bundle) => {
  var isEmpty = true;
  for(var i = 0; i < bundle.bundle.length; i++) {
    if (bundle.bundle[i].count !== 0) isEmpty = false;
  }
  if (isEmpty) {
    return (
      <tr></tr>
    )
  }
  else if (!bundle.bundle[3].count) {
    return <div>{bundle.bundle[5].name} 0</div>
  }
  else return (
    <div>{bundle.bundle[5].name} {(bundle.bundle[0].count / bundle.bundle[3].count) * 100} %</div>
  )
}
 
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const statisticBundle = [
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
    },
    {
      name: "total",
      count: total
    },
    {
      name: "average",
      count: 0
    },
    {
      name: "positive",
      count: 0
    }
  ]

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
      <div>
        <table>
            <Statistics bundle={statisticBundle} />
            <AverageScore bundle={statisticBundle} />
            <PositiveScore bundle={statisticBundle} />
        </table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)