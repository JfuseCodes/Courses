export default function MessageBanner(props){
    let currentMessage = null
    let bannerBackgroundColor = null
    console.log(props.gameResult)

    switch(props.count) {
        
        case(1): currentMessage = 'Farewell HTML'
            break;
        case(2): currentMessage = 'Farewell HTML & CSS🫡 '
            break;
        case(3): currentMessage = 'Farewell HTML, CSS, & JavaScript 🫡'
            break;
        case(4): currentMessage = 'Farewell HTML, CSS, JavaScript & React 🫡'
            break;
        case(5): currentMessage = 'Farewell HTML, CSS, JavaScript, React & Typescript🫡'
            break;
        case(6): currentMessage = 'Farewell HTML, CSS, JavaScript, React, Typescript & Node.js🫡'
            break;
        case(7): currentMessage = 'Farewell HTMl, CSS, JavaScript, React, Typescript & Python 🫡'
            break;
        case(8): currentMessage = 'Farewell HTMl, CSS, JavaScript, React, Typescript, Python & Ruby 🫡'
            break;
         
        case(9): currentMessage = "You lose! Better start learning Assembly 😭"
            break;
    }
    
    switch(props.gameResult){
        case(null): bannerBackgroundColor ='purple' 
        break;
        case("won"): bannerBackgroundColor ='green'
        break;
        case("lost"): bannerBackgroundColor = 'red'
        
    }

    const gameWon = <div className={`AEG--mb-content ${bannerBackgroundColor} primary-light`}>
                <p className='mb--p fs-20 fw-500'>You win!</p>
                <p className='mb--p fs-16 fw-500'>Well done! 🎉</p>
            </div>

    const gameLost = <div className={`AEG--mb-content ${bannerBackgroundColor} primary-light`}>
                <p className='mb--p fs-20 fw-500'>Game over!</p>
                <p className='mb--p fs-16 fw-500'>You lose! Better start learning Assembly 😭</p>
            </div>

    return (
        <>
        {props.gameResult == 'won' && gameWon}
        {props.gameResult == 'lost' && gameLost}
        {
            props.gameState & props.count > 0 &&
            
            <div className={`AEG--mb-content ${bannerBackgroundColor} primary-light`}>
                        {/* <h1 className='mb--heading fs-20 fw-300'>You win!</h1> */}
                        {/* {props.gameResult == 'won' &&  "You win!"}
                        {props.gameResult == 'lost' && 'Game Over!'} */}
                        {props.count > 0 && <p className='mb--p fs-16 fw-200 fs-i'>{currentMessage}</p>}
            </div>
        }
        
        </>
    )
}