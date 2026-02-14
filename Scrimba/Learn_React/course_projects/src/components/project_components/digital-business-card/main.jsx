import emailIcon from "../../../assets/digital-business-card/icons/mail.png"
import linkedinIcon from "../../../assets/digital-business-card/icons/linkedin.png"


const Main = () => {
    return (
        <main className='dbc--main'>
            <header>
                <div className='dbc--card-name'>JM Script</div>
                <div className='dbc--card-title '>Technical Consultant</div>
                <div className='link'><a 
                    href='https://jfusedesigns.com' 
                    rel='noopener noreferrer'
                    target='_blank' >overscript.com</a>
                </div>
            
                <div className='button-containers'>
                    <button className='dbc--card-button dbc--card-email'>
                        <img src={emailIcon} alt="mail icon" />Email
                    </button>
                    <button className='dbc--card-button dbc--card-linkedin'>
                        <img src={linkedinIcon} alt="mail icon" />
                        LinkedIn
                    </button>
                </div>

            </header>
            <div className='dbc--bio dbc--ta-l ' >
                <div className='about-me'>
                    <h1 className='dbc--card-bio-heading dbc--secondary-white dbc--fs-16 dbc--fw-700'>About</h1>
                    <p className='dbc--tertiary-white dbc--fs-10 dbc--fw-400 dbc--bio-p'>I am an IT Professional with 5+ years of experience specializing in healthcare desktop support and technical deployments. Currently providing Level 2 support at a hospital, I excel at managing complex workflows. With a background ranging from Northwell Health's Epic conversion to React.js development, I combine deep technical troubleshooting with a focus on operational efficiency.
                    </p>
                </div>
                <div className='interests'>
                    <h1 className='dbc--card-bio-heading dbc--secondary-white dbc--fs-16 dbc--fw-700'>Interests</h1>
                    <p className='dbc--tertiary-white dbc--fs-10 dbc--fw-400 dbc--bio-p'>
                        Tech enthusiast. Coding wizard. Video editing pro. Bookworm. ₿itcoin semi-maxi. Gaming addict. Basketball junkie. Boxing fanatic.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main