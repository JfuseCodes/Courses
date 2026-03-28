export default function Letter (props) {

    const gameLost = <div className='AEG--w-letter primary-light'>
        <p className={`${props.isShown == true ? 'isShown' : 'red-text'}`}>{props.letter.toUpperCase()}</p>
    </div>
    
    const regularGameFlow =  <div className='AEG--w-letter primary-light'>
            <p className={`${props.isShown == true ? 'isShown' : 'hidden'}`}>{props.letter.toUpperCase()}</p>
        </div>

    return (
        //  <div className='AEG--w-letter primary-light'>
        //     <p className={`${props.isShown == true ? 'isShown' : 'hidden'}`}>{props.letter}</p>
        // </div>
       <>
       {props.gameResult == 'lost' ? gameLost : regularGameFlow}
       </>
    )
} 