export default function Letter (props) {
    console.log(props)
    // console.log(props.word[0].split(''))


    // const word = props.word[0].split('').map( letter => {
    //     return <div className='AEG--w-letter'>{letter.toUpperCase()}</div>
    // })

    return (
        <div className='AEG--w-content primary-light'>{props.letter}</div>
    )
} 