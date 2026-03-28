export default function Key(props) {
 
    

    
    // return (
        // {
        //     props.isCorrect != null ? <button></button> : <button></button>
        // }


        // <button 
        //     onClick={props.handleClick}
            // className={`keyboard-key div${props.id} ${props.isActive ? 'kk-active' : 'kk-inactive'} ${(props.isCorrect & props.isCorrect != null) ? 'kk-correct' : 'kk-incorrect'}`}>{props.letter}</button>
    // )

    return(
        //non active game state (so just regular buttons without )
        <>{props.isCorrect == null && <button onClick={props.handleClick} className={`keyboard-key div${props.id}`}>
            {props.letter}
        </button>}
        {props.isCorrect != null && <button className={`keyboard-key div${props.id} kk-inactive ${props.isCorrect ? 'kk-correct' : 'kk-incorrect'}`} disabled>{props.letter}</button>} </>

        // active game state
        
    )
}