import React from 'react'
import WordData from './Data/WordData'
import ProgrammingLanguageData from "./Data/ProgrammingLanguageData"
import ProgrammingLanguage from './ProgrammingLanguage'
import MessageBanner from './MessageBanner'
import NewGameButton from './NewGameButton'
import Letter from './Letter'
import Alphabet from './Data/KeyboardData'
import Key from './Key'

export default function Main() {
    
    const [gameState, setGameState] = React.useState(true)
    const [gameResult, setGameResult] = React.useState(null)
    const [programmingLanguages, setProgrammingLanguages] = React.useState(ProgrammingLanguageData)
    const [programmingLanguageCount, setProgrammingLanguageCount] = React.useState(0);
    const [word, setWord] = React.useState(WordData)
    const [keyboard, setKeyboard] = React.useState(Alphabet)
    const [activeKeyboardKey, setActiveKeyboardKey] = React.useState(null)
    const programmingLanguageSection = programmingLanguages.map(language => {
        return <ProgrammingLanguage 
                    id={language.id}
                    key={language.id}
                    name={language.languageName}
                    backgroundColor={language.colorTheme}
                    textColor={language.textColor}
                    isActive={language.isActive} 
                />
    })

    const getActiveKeyboardKey = event => {
        if(!gameState) return; // Prevent clicks if game is over

        const clickedLetter = event.target.innerText.toUpperCase();
        const isCorrect = word.some( letter => letter.letter.toUpperCase() === clickedLetter)

        //1. Update Keyboard
        setKeyboard( prev => prev.map( key => 
            key.letter === clickedLetter ? 
                {...key, 
                    isActive: false, 
                    isCorrect } : 
                key
        ))

        //2. Update Word       
        setWord(prev => prev.map(item => 
            item.letter.toUpperCase() === clickedLetter ? 
                {...item, isShown: true} : item
        ))

        //3. Handle Wrong Guess
        if(!isCorrect) {
            setProgrammingLanguages(prev => prev.map( (lang, index) => 
                index === programmingLanguageCount ? 
                    {...lang, isActive: false} : lang 
            ))
            setProgrammingLanguageCount(prev => prev + 1)
        }
    }
    
    const startNewGame = () => {
        console.log('start new game!')
        setKeyboard(Alphabet)
        setWord(WordData)
        setProgrammingLanguages(ProgrammingLanguageData)
        setProgrammingLanguageCount(0)
        setGameResult(null)
        setGameState(true)
    }
    
    // for use after hard coded word is finished with -> using hard coded data to stop over calling fetch/api
//     React.useEffect(() => {
//         const getWord = async () => {
//             try {
//             const response = await fetch('https://random-word-api.herokuapp.com/word');
            
//             // 1. Check if the response is actually okay (not a 503 or 404)
//             if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//             const result = await response.json(); // result is ["word"]
//             const wordString = result[0];

//             //create array of objects
//             const charArray = wordString.split('').map( (char, index) => ({
//                 id: index + 1,
//                 letter:char,
//                 isShown: false
//             }))

              

//             // 3. Update state directly
//             setWord(charArray);
//             console.log(word)
//             } catch (err) {
//             console.error("Fetch failed:", err.message);
//             }
//         };

//         getWord();
// }, []);



    // after keyboard button is clicked check if they match the word
    // React.useEffect(() => {                     
    //     if (!activeKeyboardKey) return
        
    //     setWord(prevWord => 
    //         prevWord.map(item =>       
    //         {
    //             return item.letter.toUpperCase() === activeKeyboardKey.toUpperCase() ? {...item, isShown: true} : item
    //         })
    //     )


    // }, [activeKeyboardKey])

    React.useEffect(() => {
        const isWon = word.every(letter => letter.isShown);
        const isLost = programmingLanguageCount >= programmingLanguages.length; // count greater than total number os languages

        if(isWon && gameState) {
            setGameState(false);
            setGameResult("won")

        } else if(isLost && gameState) {
            setGameState(false)
            setGameResult("lost")
        }

        // if(!activeKeyboardKey) return;

        // setKeyboard(prevKeyboard => 
        //     prevKeyboard.map(( key => {
        //         // only update the key that was clicked
        //         if (key.letter === activeKeyboardKey.char) {
        //             return {
        //                 ...key,
        //                 isActive: false,
        //                 isCorrect: activeKeyboardKey.isCorrect
        //             }
        //         }

        //         // Return everyone else untouched
        //         return key; 
        //     }))
        // )

        // if(activeKeyboardKey.isCorrect === false) {
        //     setProgrammingLanguages(prevlanguages => 
        //         prevlanguages.map( (language, index) => {
        //             //If this languages index matches current count, kill it
        //             return index === programmingLanguageCount ? {...language, isActive: false} : language
        //         })
        //     )
        // // Move to the next language for the next wrong guess
        //     setProgrammingLanguageCount(prevCount => prevCount + 1)
        // }

        // //check gameState & determine when game is over
        // if(gameState && programmingLanguageCount < 8) {
        //     //1. Check ifa ll letters are shown (WIN)
        //     const isWon = word.every( letter => letter.isShown === true)

        //     if(isWon){
        //         setGameState(false)
        //         setGameResult(true)
        //     }

        //     //2. Check if lives are out (LOSS) -> if count reaches 8 handle loss here
            
        // }
        // if(programmingLanguageCount >= 8){
        //         setGameState(false)
        //         setGameResult(true)
        //     }

    }, [word, programmingLanguageCount])
    console.log(programmingLanguageCount)
   
    return(
        <main className='AEG--main-container'>
            <div className='AEG--content-container'>
                <section className={`AEG--message-banner-container mt-20`}>
                    {<MessageBanner gameResult={gameResult} gameState={gameState} count={programmingLanguageCount}/>}
                </section>
                
                <section className='AEG--PLS-container'>
                    {programmingLanguageSection}
                </section>
                
                <section className='AEG--word-container'>
                    <div className='AEG--word-content'>
                        {word.map( letter => <Letter id={letter.id} key={letter.id} letter={letter.letter} isShown={letter.isShown} gameState={gameState} gameResult={gameResult}/>)}
                    </div>
                </section>

                <section className='AEG--keyboard-container'>
                    <div className='AEG--keyboard-content'>
                        {keyboard.map( key => <Key 
                                                id={key.id} 
                                                handleClick = {e => getActiveKeyboardKey(e)} 
                                                key={key.id} 
                                                letter={key.letter}
                                                isActive = {key.isActive}
                                                isCorrect= {key.isCorrect} 
                                                />
                                                )}
                    </div>
                </section>

                {gameState == false && <NewGameButton handleClick={startNewGame} />}
            </div>
        </main>
    )
}