import {NameExample, CounterExample } from "./components/example"
import { Feedback } from "./components/Feedback"

const Hello = props => {
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Header = props => {
  
  return (
    <header>
      <h1>{props.text}</h1>
    </header>
  )
}

const Part = props => {
  return (
    <p>{props.partNumber}:{props.exerciseCount}</p>
  )
}

const Content = (props) => {
  const content = props.contentToRender.map(obj => <Part key={obj.id} partNumber={obj.name} exerciseCount={obj.exercises}/>)
  return (
    <div>
      {content}
    </div>
  )
}


const Total = props => {
  console.log(props)
  
  return (
    <footer>
      <h1>Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</h1>
    </footer>
  )
}

const App = () => {
  const course = "Half Stack application development";
  
  const parts = [
    {
      id: 1,
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      id: 2,
      name: "Using props to pass data",
      exercises: 7
    },
    {
    id: 3,
    name: 'State of a component',
    exercises: 14
  }]
  
  return (
     <div>
      <Header text = {course} />
      <Content contentToRender ={parts}/>
      <Total total={parts}/> 

      <NameExample />
      <CounterExample />
      <Feedback />
    </div>
  )
}

export default App