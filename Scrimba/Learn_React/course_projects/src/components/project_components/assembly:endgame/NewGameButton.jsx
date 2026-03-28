export default function NewGameButton(props) {

    return (
        <section className='AEG--newgamebutton-container'>
                    <div className='AEG--NGB-content'>
                        <button className='AEG--newgamebutton blue fw-600 fs-16' onClick={props.handleClick}>New Game</button>
                    </div>
                </section>
    )
}