import React from 'react'

export default function UseEffects() {

    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(1)


    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))

    }, [count])

    const handleCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={handleCount}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}