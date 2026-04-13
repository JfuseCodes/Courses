
import he from 'he'
export default function Choice(props) {

    const {choice, correct_answer, selectedAnswer, quizStatus, handleClick} = props
  
    // Derived states
    const isSelected = selectedAnswer === choice
    const isCorrect = choice === correct_answer

    let statusClass = "";
    
    if(quizStatus) {
        if (isCorrect) {statusClass = "success";  }// always highlight correct answer
        else if(isSelected && !isCorrect) statusClass = "failure" // highlight wrong selection
        else if(!isSelected && !isCorrect) statusClass = "unchosen"
    }
    if(!quizStatus) {
        if(isSelected) statusClass = "chosen"
    }

    // const isQuizOver = props.quizStatus === true || props.quizStatus === 'true'

    
    
    //Determine Styling states
    // const isCorrectSelection = isChosen && props.choice === props.correct_answer,
    //       isWrongSelection = isChosen && props.choice !== props.correct_answer,
    //       wasTheRightAnswer = !isChosen && props.choice === props.correct_answer

   
    // const success = chosen && props.correct_answer == props.choice 
    // const failure = chosen && props.correct_answer != props.choice
    // const correctFailure = !chosen && props.correct_answer == props.choice

    // console.log(`${props.choice} - ${props.quizStatus && correctFailure}`)

    return(
        // <button onClick={(e) => selectChoice(e, answerArray)} className={`btn-choice fs-10 fw-500`}>{choice}</button>
        // <button onClick={props.handleClick} className={`btn-choice fs-10 fw-500 ${props.quizStatus == 'true' && correctFailure ? 'success' : ""} ${success ? 'success': ''} ${failure ? 'failure' : ''}`} ref={myRef} disabled={props.quizStatus && true}>{props.choice}</button>
        // <button 
        //     onClick={props.handleClick} 
        //     className={`
        //         btn-choice fs-10 fw-500 
        //         ${isQuizOver && (isCorrectSelection || wasTheRightAnswer) ? 'success' : ''} 
        //         ${isQuizOver && isWrongSelection ? 'failure' : ''}
        //         `} 
        //     disabled={isQuizOver}>{props.choice}</button>
    
        <button
            onClick={handleClick}
            disabled={quizStatus}
            className={`btn-choice fs-10 fw-500 ${statusClass}`}>{he.decode(choice)}</button>
    )
}