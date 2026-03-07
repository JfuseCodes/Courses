import React from 'react'
import '../styles/css/central_styling.css'

export default function WindowTracker() {

    const [shown, setShown] = React.useState(true)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    const toggle = () => setShown(prevValue => !prevValue)

    React.useEffect(() => {
        const watchWindowWidth = () => setWindowWidth(window.innerWidth) 

        window.addEventListener('reize', watchWindowWidth)

        return function(){
            //clean up function, to remove the event listener
            window.removeEventListener('resize', watchWindowWidth)
        }
    }, [])

    return (
        <div>
            <button className='nice-looking-btn fs-18' onClick={toggle}>Toggle Window Tracker</button>
            {shown && <h1>Window width: {windowWidth}</h1>}
        </div>
    )
}