// export default function GameButton(props) {
//     console.log(props.isGameOver)
//     const buttonText = props.isGameOver === true ? 'Play Again' : "ROLL!!!"
//     return(
//         <button className='t--button' onClick={props.handleClick}>
//            {
//             buttonText
//            }
//         </button>
//     )
// }

export default function GameButton(props) {

    return (
        <button className='t--button' onClick={() => {
            // functional setter to get absolute LATEST STATE
            setGameOver(prevGameOver => {
                
            })
        }}></button>
    )
}