import ProfilePhoto from "../../../assets/digital-business-card/profile-photo.png"
const Header = () => {

    return (
        <header className='dbc--header'>
            <img className='profile-photo' src={ProfilePhoto} alt="animate photo of Jfuse" />
        </header>
    )
}

export default Header