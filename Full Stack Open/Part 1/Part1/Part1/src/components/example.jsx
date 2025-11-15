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

const CounterExample = () => {

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

const LeftRightClickExample = () => {
    //State Example 1
    // const [ left, setLeft ] = useState(0)
    // const [ right, setRight ] = useState(0)

    //State Example 2
    const [ clicks, setClicks ] = useState({
        left: 0, 
        right: 0
    })

    /*{
    ...clicks
     -> creates a new object that has copies of all of the properties of the clicks object
     -> creates copy of clicks object 
        }*/

    // const handleLeftClick = () => {
    //     const newClicks = {
    //         ...clicks,
    //         left: clicks.left + 1,
            
    //     }
    //     setClicks(newClicks)
    // }

    // const handleRightClick = () => {
    //     const newClicks = {
    //         ...clicks,
    //         right: clicks.right + 1,
            
    //     }
    //     setClicks(newClicks)
    // }

    //State Example 3 -> simpler event handler function
    const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
    const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})



    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            {clicks.right}
        </div>
    )
}

const HandlingArrayExample = () => {
    
    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [allClicks, setAll ] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

const AsynchronousUpdate = () => {
    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [allClicks, setAll ] = useState([])
    const [ total, setTotal ] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(left + 1)
        setTotal(updatedLeft + right )
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(right + 1)
        setTotal(updatedRight + left)
    }



    return(
         <div>
            {left}
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClick}>Right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>total: {total}</p>
        </div>
    )
}

const ResetToZeroExample = () => {
    const [ value, setValue ] = useState(10)

    const reset = () => {
        setValue(0)
    }

    return (
        <div>
            {value}
            <button onClick={reset}>reset to Zero</button>
        </div>
    )
}

export {
    NameExample,
    CounterExample,
    LeftRightClickExample,
    HandlingArrayExample,
    AsynchronousUpdate,
    ResetToZeroExample
}

