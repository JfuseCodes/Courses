import globePhoto from '../../../assets/travel-journal/globe.png'
const Header = () => {

    return (
        <header className='tj--header-container'>
            <div className='tj--header-content'>
                <span className='tj--globe-container'>
                    <img src={globePhoto} alt="image of a globe" />
                </span>
                <span className='tj--header--heading'>my travel journal.</span>
            </div>
        </header>
    )
}

export default Header;