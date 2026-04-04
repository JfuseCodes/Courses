import React from 'react'

import StartMenu from '../project_components/quizzical/StartMenu'
import '../styles/css/quizzical.css'
import quizData from '../project_components/quizzical/data';

export default function Quizzical() {
    const [data, setData] = React.useState(null);
    const [quizStarted, setQuizStarted] = React.useState(false)

    const startQuiz = () => {
        setQuizStarted(true)
    }

    // fetch questions
    React.useEffect(() => {
            fetch("https://opentdb.com/api.php?amount=10")
                .then(res => res.json())
                .then(results => {
                    // console.log(results.data.memes)
                    // const data = results.data.memes
                    const fetchedData = results.results
                    setData(data)
                    console.log(fetchedData)
                    // setAllMemes(data)
                    // console.log(allMemes)
                })
        }, [])

    // Test data
    // React.useEffect(() => {
    //     if(quizStarted) {
            
    //     }
    // }, [])
    

    console.log(data)

    return (
        <main className='quizzical--container'>
            <div className='quizzical--content-container'>
                {!quizStarted && <StartMenu handleClick={startQuiz}/>}
                
                {quizStarted && data.map( object => {
                    
                    return (
                        <div>
                            <div>
                                <h3>{object.question}</h3>
                            </div>
                            <div>
                                {/* {object.incorrect_answers.map(question => question)} */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}