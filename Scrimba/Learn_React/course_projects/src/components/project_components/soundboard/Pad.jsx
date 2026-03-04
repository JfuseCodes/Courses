import React from 'react'


export default function Pad(props) {
 

    return (
        <button className={props.on ? "on" : null} onClick={ () => props.handleClick(props.id) } style={{backgroundColor: props.color}}>{props.id}</button>
    )
}