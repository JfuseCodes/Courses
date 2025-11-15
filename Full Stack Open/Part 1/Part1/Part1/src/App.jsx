import {NameExample, CounterExample, LeftRightClickExample, HandlingArrayExample, AsynchronousUpdate, ResetToZeroExample } from "./components/example"
import { Feedback } from "./components/Feedback"
import CourseInfo from "./components/CourseInfo"
import Anecdotes from "./components/Anecdotes"

const App = () => {
  
  return (
    <div>
      {/* <CourseInfo /> */}
      {/* <Feedback /> */}
      <Anecdotes />
      {/* <HandlingArrayExample /> */}
      {/* <AsynchronousUpdate /> */}
      {/* <ResetToZeroExample />  */}
      <AsynchronousUpdate/>
    </div>
  )
}

export default App