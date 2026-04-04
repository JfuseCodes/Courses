import React from 'react'
// import WordData from './Data/WordData'
import GetWord from './Data/WordData'
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
    const [word, setWord] = React.useState(null)
    const [keyboard, setKeyboard] = React.useState(Alphabet)
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

    async function loadWord() {

            // 1. Await the promise to get the actual string
            const wordString = await GetWord()

            //2. Format the raw string into your object structure
            const charArray = wordString.split('').map((char,index) => ({
                id: index + 1, 
                letter: char,
                isShown: false
            }))

            // 3. Set state with final array
            setWord(charArray)
    }

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
        loadWord()
        setKeyboard(Alphabet)
        setProgrammingLanguages(ProgrammingLanguageData)
        setProgrammingLanguageCount(0)
        setGameResult(null)
        setGameState(true)
    }
       
    React.useEffect(() => { loadWord() }, [])

    React.useEffect(() => {
        // wait for word
        if(word == null) return; 
        
        // determine win/loss
        const isWon = word.every(letter => letter.isShown);
        const isLost = programmingLanguageCount >= programmingLanguages.length; // count greater than total number os languages

        // only update if game is active
        if(gameState) {
            if(isWon) {
                setGameState(false);
                setGameResult("won")
            } else if(isLost) {
                setGameState(false)
                setGameResult("lost")
            }
        }

    }, [word, programmingLanguageCount, gameState, programmingLanguages.length])

   
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
                        {word != null && word.map( letter => <Letter id={letter.id} key={letter.id} letter={letter.letter} isShown={letter.isShown} gameState={gameState} gameResult={gameResult}/>)}
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
                                                gameState= {gameState}
                                                />
                                                )}
                    </div>
                </section>

                {gameState == false && <NewGameButton handleClick={startNewGame} />}
            </div>
        </main>
    )
}