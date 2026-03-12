export default function Die (props) {
    
    return (
        <button className={`t--button-die div${props.id} ${props.frozen ? 'frozen' : null}`} onClick={() => props.handleClick(props.id)}>
            {props.number}
        </button>
    )
}