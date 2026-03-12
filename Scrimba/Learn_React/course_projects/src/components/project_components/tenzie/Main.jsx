import React from 'react'
import Die from './Die'
import GameButton from './GameButton'
import data from './data'
import Confetti from 'canvas-confetti'
import { randomNumber, numberCheck } from '../component-library/general_components'


export default function Main () {
    
    const [dice, setDice] = React.useState(data)
    const [gameOver, setGameOver] = React.useState(false)

    const rollDice = () => {
        
        setDice(prevDice => 
            prevDice.map(die => 
                die.freeze == false ?  {...die, number: randomNumber(1,6)} : die
            )
        )
    }

    const freezeDie = (id) => {
        setDice(prevDice => 
            prevDice.map(die => 
                die.id === id ? {...die, freeze: !die.freeze} : die
            )
        )
    }

    React.useEffect(() => {
        const allDiceFrozen = dice.every(die => die.freeze),
              firstValue = dice[0].number,
              allSameValue = dice.every(die => die.number === firstValue)
    
        if(allDiceFrozen && allSameValue) setGameOver(true)
        console.log({allDiceFrozen, allSameValue, firstValue})
    }, [dice, gameOver])
    console.log(gameOver)

  

 
    const diceSection = dice.map( die => <Die key={die.id}id={die.id} frozen={die.freeze} handleClick={freezeDie} number={die.number}/>)
    // const buttonSection = gameOver ? <button className='t--button'>Play Again</button> : <button className='t--button' onClick={rollDice}>Roll</button>

    return (
        <main className='tenzies--main-container'>
            <div className='t--content-container'>
                <div className='t--dice-container'>
                    {diceSection}
                </div>
                <div className='t--button-container'>
                        {/* {gameOver === true ? (
                            <button className='t--button' onClick={() => setGameOver(false)}>Play Again</button> 
                         ) : (
                            <button className='t--button' onClick={rollDice}>Roll</button>
                        )} */}
                        <button className={`t--button ${gameOver ? 't--button-play-again' : null}`} onClick={rollDice}>{gameOver ? "Play Again" : "Roll"}</button>
                </div>
            </div>
            {/* {gameOver && <Confetti style={{pointerEvents: 'none'}}/>} */}

        </main>
    )
}

// export default function Main() {
//     const [dice, setDice] = React.useState(data)
//     const [gameOver, setGameOver] = React.useState(false)

//     // Helper to generate a fresh game state
//     function allNewDice() {
//         return dice.map(die => ({
//             ...die,
//             number: randomNumber(1, 6),
//             freeze: false
//         }))
//     }

//     const rollDice = () => {
//         if (!gameOver) {
//             setDice(prevDice => prevDice.map(die => 
//                 die.freeze ? die : { ...die, number: randomNumber(1, 6) }
//             ))
//         } else {
//             // This handles the "Play Again" logic
//             setGameOver(false)
//             setDice(allNewDice())
//         }
//     }

//     const freezeDie = (id) => {
//         setDice(prevDice => prevDice.map(die => 
//             die.id === id ? { ...die, freeze: !die.freeze } : die
//         ))
//     }

//     React.useEffect(() => {
//         const allDiceFrozen = dice.every(die => die.freeze)
//         const firstValue = dice[0].number
//         const allSameValue = dice.every(die => die.number === firstValue)

//         if (allDiceFrozen && allSameValue) {
//             setGameOver(true)
//         }
//     }, [dice])

//     return (
//         <main className='tenzies--main-container'>
//             {gameOver && <Confetti style={{pointerEvents: 'none'}}/>}
//             <div className='t--content-container'>
//                 <div className='t--dice-container'>
//                     {dice.map(die => (
//                         <Die 
//                             key={die.id} 
//                             id={die.id} 
//                             frozen={die.freeze} 
//                             handleClick={freezeDie} 
//                             number={die.number} 
//                         />
//                     ))}
//                 </div>
//                 <div className='t--button-container'>
//                     {/* Inline logic ensures the button ALWAYS matches the state */}
//                     {/* <button 
//                         className='t--button' 
//                         onClick={rollDice}
//                     >
//                         {gameOver ? "Play Again" : "Roll"}
//                     </button> */}
//                     {/* <GameButton handleClick={rollDice} isGameOver={gameOver}/> */}
//                     <div className='t--button-container'>
//     <button 
//         className='t--button' 
//         onClick={rollDice}
//     >
//         {/* If Confetti shows, this MUST evaluate to "Play Again" */}
//         {gameOver ? "Play Again" : "Roll"}
//     </button>
// </div>
//                 </div>
//             </div>
//         </main>
//     )
// }