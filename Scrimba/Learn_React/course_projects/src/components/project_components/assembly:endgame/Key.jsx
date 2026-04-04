export default function Key(props) {

    return(
        //non active game state (so just regular buttons without )
        <>{props.isCorrect == null && <button onClick={props.handleClick} className={`keyboard-key div${props.id} ${props.gameState == false ? 'dim-keyboard' : ''}`}>
            {props.letter}
        </button>}
        {props.isCorrect != null && <button className={`keyboard-key div${props.id} kk-inactive ${props.isCorrect ? 'kk-correct' : 'kk-incorrect'} ${props.gameState == false ? 'dim-keyboard' : ''}`} disabled>{props.letter}</button>} </>
        
    )
}