export default function StartMenu(props) {

    return (
        <div className='q--start-menu-container'>
            <div className='q--start-menu-heading text-darkblue'>
                <h1 className='ff-karla fs-32 fw-700'>Quizzical</h1>
                <p className='ff-inter fs-16 fw-300 mt-7'>Some description if needed</p>
            </div>
            <div className='q--start-button-container'>
                <button 
                onClick={props.handleClick}
                className='q--primary-button q--btn-start-menu'>Start quiz</button>
            </div>
        </div>
    )
}