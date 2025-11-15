const Header = ({headerText_Style}) => {
  
  return (
    <header>{headerText_Style}</header>
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
  return (
    <footer>
      <h3>Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</h3>
    </footer>
  )
}

const CourseInfo = () => {
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
            <u><h1>Course Info</h1></u>
            <Header headerText_Style ={<h2>{course}</h2>} />
            <Content contentToRender={parts}/>
            <Total total={parts} />
        </div>
    )
}

export default CourseInfo 