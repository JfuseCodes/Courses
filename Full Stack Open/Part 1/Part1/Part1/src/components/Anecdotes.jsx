import { useState } from "react"

const AnecdotesOfTheDay = ({anecdotes, selected, votes, handleVote, handleNextAnecdote}) => {

   

    return (
    <div>
        <header><u><h1>Anecdotes</h1></u></header>
        <h3>Anecdote of the day</h3>
        <p>{anecdotes[selected]}</p> 
        <p>has {votes[selected]} {votes[selected] == 1 ? `vote` : `votes`}</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
    )
}

const MostVotes = ({maxNumber, anecdoteWithMostVote, anecdotes}) => {

    return (
    <div>
        <header>
            <h3>Anecdote with most votes</h3>
        </header>
        <section>
            <p>{anecdotes[anecdoteWithMostVote]}</p>
            <p>has {maxNumber} votes</p>
        </section>
    </div>)
}

const Anecdotes = () => {
    const getRandomIntInclusive = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
  } 

    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [ votes, setVote ] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  });
  const [maxNumber, setMaxNumber] = useState(null);
  const [displayMostVote, setDisplayMostVote] = useState(null);



    const checkHighNumbers = (updatedVotes) => {
        // // convert {} to an array
        // const voteValues = Object.values(votes);

        // // find the highest vote count
        // const _maxNUmber = Math.max(...voteValues);

        // // find the index (anecdote) that has the highest vote count
        // const highestIndex = Object.keys(votes).find(key => votes[key] === _maxNUmber);
        // setDisplayMostVote(highestIndex);
        
        // console.log(`Anecdote with the highest votes is at index ${highestIndex} with ${_maxNUmber} votes.`)

        // use passed argument
        const voteValues = Object.values(updatedVotes)

        //find the highest vote count
        const _maxNumber = Math.max(...voteValues)

        // find index (anecdote) that has the highest vote count
        const highestIndex = Object.keys(updatedVotes).find(key => updatedVotes[key] === _maxNumber)

        // Set both display states based on the fresh data
        setDisplayMostVote(highestIndex)
        setMaxNumber(_maxNumber) // set this here with correct number
    }

  const [ selected, setSelected ] = useState(getRandomIntInclusive(0, anecdotes.length - 1));
  const handleVote = () => {
    // setVote({...votes, 
    //     [selected]: votes[selected] + 1 })
    // const updatedVote = Math.max(...Object.values(votes) ) + 1
    // setMaxNumber(updatedVote);
    // console.log(`maxVote: ${maxNumber}`)
    // checkHighNumbers()

    // 1. Calculate next state object
    const newVotes ={
        ...votes,
        [selected]: votes[selected] + 1
    }

    // 2. Schedule the state update (asynchronous)
    setVote(newVotes)
    
    // 3. Immediately call the check function, using the newVotes object (synchronous)
    checkHighNumbers(newVotes)


  }
  const handleNextAnecdote = () => selected == anecdotes.length - 1 ? setSelected(0) : setSelected(selected + 1)


    return (
        <div>
            <AnecdotesOfTheDay anecdotes={anecdotes} selected={selected} votes={votes} handleVote={handleVote} handleNextAnecdote={handleNextAnecdote}/>
            {maxNumber > 0 ? <MostVotes maxNumber={maxNumber} anecdoteWithMostVote={displayMostVote} anecdotes={anecdotes}/> : ''}
        </div>
    )
}
export default Anecdotes
