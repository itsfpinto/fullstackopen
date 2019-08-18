import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Content = (content) => {
    return (
        <div>
            <Part name={content.parts[0].name} exercises={content.parts[0].exercises} />
            <Part name={content.parts[1].name} exercises={content.parts[1].exercises} />
            <Part name={content.parts[2].name} exercises={content.parts[2].exercises} />
        </div>
    )
}
const Part = (content) => {
    return (
        <div>
            <p>
                {content.name} {content.exercises}
            </p>
        </div>
    )
}

const Total = (total) => {
    console.log(total)
    return (
        <div>
            <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises} </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))