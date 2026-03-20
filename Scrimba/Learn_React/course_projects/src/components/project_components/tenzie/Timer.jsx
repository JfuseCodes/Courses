export default function Timer(props) {

    console.log(props)
    return (
        <div className='tenzie--timer-container'>
            <div className='t--timer-content'>
                Time: {`${props.time.minutes < 10 ? 0 : ''}${props.time.minutes}:${props.time.seconds < 10 ? 0:''}${props.time.seconds}`}
            </div>
        </div>
    )
    
}