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
            <Part part={content.content[0].name} exercises={content.content[0].exercises}/>
            <Part part={content.content[1].name} exercises={content.content[1].exercises}/>
            <Part part={content.content[2].name} exercises={content.content[2].exercises}/>
        </div>
    )
}
const Part = (content) => {
    return (
        <div>
            <p>
                {content.part} {content.exercises}
            </p>
        </div>
    )
}

const Total = (total) => {
    return (
        <div>
            <p>Number of exercises {total.exercises[0].exercises + total.exercises[1].exercises + total.exercises[2].exercises}</p>
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
            <Content content={course.parts} />
            <Total exercises={course.parts} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))