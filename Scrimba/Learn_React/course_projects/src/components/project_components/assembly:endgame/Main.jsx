import React from 'react'
import Data from "./Data"
import ProgrammingLanguage from './ProgrammingLanguage'
import MessageBanner from './MessageBanner'
import Letter from './Letter'

export default function Main() {
    const [programmingLanguages, setProgrammingLanguages] = React.useState(Data)
    const [word, setWord] = React.useState(null)
    const programmingLanguageSection = programmingLanguages.map(language => {
        return <ProgrammingLanguage 
                    id={language.id}
                    key={language.id}
                    name={language.languageName}
                    backgroundColor={language.colorTheme}
                    textColor={language.textColor}
                    active={language.isActive} 
                />
    })

    // fetch & set word
    // React.useEffect(() => {
    //     fetch("https://random-word-api.herokuapp.com/word")
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             // const formattedWord = result.word.split('').map((value, index) => ({
    //             //     id: index,
    //             //     letter: value
    //             // }))
    //             // setWord(formattedWord)
         
    // },[])}

    //fetch & set word
    React.useEffect(() => {

        // FETCH API
        fetch("https://random-word-api.herokuapp.com/word")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                
            })
    }, [])
    
    return(
        <main className='AEG--main-container'>
            <div className='AEG--content-container'>
                <MessageBanner />
                <section className='AEG--PLS-container'>
                    {programmingLanguageSection}
                </section>
                <section>
                    {/* {word.map( letter => <Letter letter={letter}/>)} */}
                </section> 
            </div>
        </main>
    )
}