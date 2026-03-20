export default function Die (props) {
    
    //create an array of divs based on dice number
    const diceArray = []
    for(let i = 1; i <= props.number; i++) {
        diceArray.push(
            <div className={`div${i}`}>&#9679;</div>
        )
    }    

    return (
        <button 
            id={`div${props.id}`}
            className={`t--button-die div${props.id} ${props.frozen && 'frozen'} ${props.number}`} 
            onClick={() => props.handleClick(props.id)}
            aria-pressed={props.frozen}
            aria-label={`Die with value ${props.value}`}
            >
            <div className={`t--die-dot-container die-${props.number}`}>
               {diceArray}
            </div>
        </button>
    )
}