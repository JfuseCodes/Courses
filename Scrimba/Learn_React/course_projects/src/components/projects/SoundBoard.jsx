import padData from '../project_components/soundboard/pads.js'
import Pad from "../project_components/soundboard/Pad"
import React from 'react'
import '../styles/css/soundboard.css'

export default function Soundboard() {

    const [pads, setPads] = React.useState(padData)

    const toggle = (id) => {
        
        setPads( prevPads => 
            prevPads.map( pad => 
                pad.id === id ? {...pad, on: !pad.on} : pad 
            )
        )
    }

    const buttonElements = pads.map( pad => {
        return <Pad 
                    key={pad.id} 
                    id={pad.id}
                    opacity={pad.on}
                    color={pad.color}
                    on={pad.on}
                    handleClick={toggle}/> 
    })

    return (
        <main className='soundboard--container'>
            <div className='soundboard--content-container'>
                {buttonElements}
            </div>
        </main>
    )
}