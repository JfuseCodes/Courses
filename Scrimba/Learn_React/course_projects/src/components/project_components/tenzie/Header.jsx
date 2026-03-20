import Timer from "./Timer"
import RollCount from "./RollCount"

export default function Header(props){

    return (
        <header className='t--header-container'>
            <div className='t--content-container mt-20'>
                <Timer time={props.time}/>
                <RollCount count={props.count} />
                <h1 className='fs-32 mt-32'>Tenzies</h1>
                <p className='fs-13 fw-400'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
        </header>
    )
}