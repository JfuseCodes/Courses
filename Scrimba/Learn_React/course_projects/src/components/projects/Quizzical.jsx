import React from 'react'
import he from 'he';

import StartMenu from '../project_components/quizzical/StartMenu'
import Choice from '../project_components/quizzical/Choice';
import '../styles/css/quizzical.css'


import yellowBlob from '../../assets/quizzical/yellow_blob.png';
import blueBlob from '../../assets/quizzical/blue_blob.png';



export default function Quizzical() {

    const [data, setData] = React.useState(null)
    const [count, setCount] = React.useState(0);
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [quizSubmitted, setQuizSubmitted] = React.useState(false)
    const [formData, setFormData] = React.useState({
        numberOfQuestions: 5,
        categoryChoice: "Any Category",
        difficultyChoice: "Any Difficulty",
        questionTypeChoice: "Any Type"
    })

    // start quiz with form data captured
    const startQuiz = (formInfo) => {
        setQuizStarted(true)

        const quizLengthData = formInfo.getAll("quizLength")
        const categoryData = formInfo.getAll("category")
        const difficultyData = formInfo.getAll("difficulty")
        const questionTypeData = formInfo.getAll("questionType")
        console.log(quizLengthData)
        setFormData({
            numberOfQuestions: quizLengthData,
            categoryChoice: categoryData,
            difficultyChoice: difficultyData,
            questionTypeChoice: questionTypeData
        })
        console.log(questionTypeData)
    }

    const playAgain = () => {
        setQuizStarted(false)
        setQuizSubmitted(false)
        setCount(0)
        getData()
    }
    

    const randomizeArray = array => {
        const shuffled = [...array] //create copy so you dont mutate original data

        for( let i = shuffled.length - 1; i > 0; i-- ) {
            const j = Math.floor(Math.random() * (i + 1));//Pick a random index from 0 to i
            
            [ shuffled[i], shuffled[j] ] = [shuffled[j], shuffled[i]]// Swap elements [i] and [j]
        }

        return shuffled;
    }

    const selectChoice = (questionId, choice) => {
        if(quizSubmitted) return; // prevent changing after submission

        setData(prevData => prevData.map( question => {
            return question.id === questionId 
                ? {...question, selectedAnswer: choice} 
                : question;
        }));

    }


    const checkAnswers = () => {
        setQuizSubmitted(true)

        data.map( q => {
            q.selectedAnswer == q.correct_answer ? setCount(prevCount => prevCount + 1) : q
        })
    }

    const categoryAPICall = formData.categoryChoice != "Any Category" ? `&category=${formData.categoryChoice}` : ""
    const difficultyAPICall = formData.difficultyChoice != "Any Difficulty" ? `&difficulty=${formData.difficultyChoice}` : ""
    const questionTypeAPICall = formData.questionTypeChoice != "Any Type" ? `&type=${formData.questionTypeChoice}` : ""
    // fetch questions
   function getData() {
    console.log(`ttps://opentdb.com/api.php?amount=${formData.numberOfQuestions}${categoryAPICall}${difficultyAPICall}${questionTypeAPICall}`)
        fetch(`https://opentdb.com/api.php?amount=${formData.numberOfQuestions}${categoryAPICall}${difficultyAPICall}${questionTypeAPICall}`)
        // fetch(`https://opentdb.com/api.php?amount=5&type=boolean`)

                .then(res => res.json())
                .then( data => {
                   const formattedData = data.results.map(q => {
                    //combine and shuffle answers
                    const allAnswers = randomizeArray([...q.incorrect_answers, q.correct_answer]);
                    
                    return {
                        ...q, 
                        id: Math.random().toString(), // unique ID for select
                        shuffledAnswers: allAnswers,
                        selectedAnswer: null
                    }
                   })
                   setData(formattedData)
   })}

    

    React.useEffect(() => getData(), [formData])

    return (
        <main className='quizzical--container'>
            <div className='q--yellow-blob-container'>
                    <img className='q--yellow-blob' src={yellowBlob} alt="" />
                </div>
            <div className='q--blue-blob-container'>
                <img className='q--blue-blob' src={blueBlob} alt="" />
            </div>
            <div className='quizzical--content-container mt-40'>
                {!quizStarted && <StartMenu handleClick={startQuiz}/>}
                
                <div className='quizzical--quiz-container'>

                    {
                        quizStarted && data.map( object => {
                            
                            return (
                                <div key={object.id} className='q--qa-set-container'>
                                    <div className='q--question-container'>
                                        <h3 className='fs-16 text-darkblue fw-600'>{he.decode(object.question)}</h3>
                                    </div>
                                    <div className='q--answer-set-container'>
                                        {object.shuffledAnswers.map( choice => (
                                            <Choice 
                                                key={choice}
                                                choice={choice}
                                                quizStatus={quizSubmitted}
                                                correct_answer={object.correct_answer}
                                                selectedAnswer={object.selectedAnswer}
                                                handleClick={() => selectChoice(object.id, choice)}
                                            />
                                        ))}
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    {
                        quizStarted 
                            && 
                        <div className='q--btn-check-answer-container mt-31 mb-35'>
                            {
                                quizSubmitted ? 
                                
                                <div className='quizzical--outcome-container'>
                                    <p className='quizzical--outcome-text'>You scored {count}/{data.length} correct answers</p>
                                    <button className='q--primary-button q--btn-play-again br-10 h-30' onClick={playAgain}>Play Again</button>
                                </div>
                                :
                                <button onClick={checkAnswers} className='q--primary-button q--btn-check-answers br-10 h-35'>Check answers</button>
                            }
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}