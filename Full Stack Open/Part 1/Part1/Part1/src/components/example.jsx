import { useState } from "react"

const Hello = ({name, age}) => {
    // const name = props.name,
    //       age = props.age;
    // const {name, age} = props

    const bornYear = () => new Date().getFullYear() - age
    
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were problbly born in {bornYear()}</p>
        </div>
    )
}

const NameExample = () => {
    const name = 'Peter',
          age = 10;
    return (
        <div>
            <Hello name='Maya' age={26+10} />
            <Hello name={name} age = {age}/>
        </div>
      
    )
}

const CounterExample = (props) => {

    const [ counter, setCounter ] = useState(0)

    const handleClick = () => {
        return setTimeout(() => setCounter(counter + 1))
    }


    return (
        <div>
            {counter}
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export {
    NameExample,
    CounterExample
}

