import React from 'react' 
import Confetti from 'react-confetti'
import Header from './Header.jsx'
import RollCount from './RollCount.jsx'
import Die from './Die'
import { useWindowSize } from 'react-use'
import data from './data'
import { randomNumber } from '../component-library/general_components'


export default function Main () {
    
    const [dice, setDice] = React.useState(data)
    const [gameStarted, setGameStarted] = React.useState(false)
    const [gameOver, setGameOver] = React.useState(false)
    const [rollCount, setCount] = React.useState(0)
    const [time, setTimer] = React.useState({
        minutes: 0,
        seconds:0,
    })
    const newGameButton = React.useRef(null)
    const { width , height } = useWindowSize()
    
    const rollDice = () => {
        
        setDice(prevDice => 
            prevDice.map(die => 
                die.freeze == false ?  {...die, number: randomNumber(1,6)} : die
            )
        )
        setCount(prevCount => prevCount + 1)

    }

    const freezeDie = (id) => {
        //trigger start of game if any die is interacted with
        if(!gameStarted) setGameStarted(true)
        setDice(prevDice => 
            prevDice.map(die => 
                die.id === id ? {...die, freeze: !die.freeze} : die
            )
        )
    }

    React.useEffect(() => {
        let timerId;

        // Timer runs if game has started AND isn't over
        if ( gameStarted && !gameOver ){
            timerId = setTimeout(() => {
                setTimer(prev => ({
                    minutes: prev.seconds === 59 ? prev.minutes + 1 : prev.minutes,
                    seconds: prev.seconds === 59 ? 0 : prev.seconds + 1
                }))
            }, 1000)
        }

        // Check win condition
        const allDiceFrozen = dice.every(die => die.freeze),
              firstValue = dice[0].number,
              allSameValue = dice.every(die => die.number === firstValue)
        
        if(allDiceFrozen && allSameValue) {
            setGameOver(true)
            return; // Stop timer logic if game is over
        }

        //end timer if game is over
        return () => clearTimeout(timerId) 

    }, [gameOver, time, gameStarted])

    
    const playAgain = () => {

        setDice(prevDice => 
            prevDice.map(die => 
                ({...die, 
                    number: randomNumber(1,6),
                    freeze: false
                })
            )
        )
        setGameOver(false)
        setTimer({minutes: 0, seconds: 0})
        setCount(0)
        
    }
 
    const diceSection = dice.map( die => <Die key={die.id} id={die.id} frozen={die.freeze} handleClick={freezeDie} number={die.number}/>)
    
    return (
        <main className='tenzies--main-container'>
            <div className='t--content-container'>
                <Header 
                    time={time} 
                    count={rollCount}
                />
                <div className='t--dice-container'>
                    {diceSection}
                </div>
                <div className='t--button-container'>
                        <button 
                            className={`t--button ${gameOver ? 't--button-play-again' : null}`} 
                            onClick={gameOver ? playAgain : rollDice}
                            ref={newGameButton}
                            >{gameOver ? "New Game" : "Roll"}</button>
                </div>
            </div>
            {gameOver && <Confetti width={width} height={height}/>}
        </main>
    )
}