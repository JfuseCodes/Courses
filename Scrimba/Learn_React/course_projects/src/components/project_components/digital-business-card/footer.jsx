import fbIcon from '../../../assets/digital-business-card/icons/facebook.png';
import ghIcon from '../../../assets/digital-business-card/icons/github.png';
import igIcon from '../../../assets/digital-business-card/icons/instagram.png';
import xIcon from '../../../assets/digital-business-card/icons/twitter.png';


const Footer = () => {

    
    return (
        <footer className='dbc--footer'>
            <div className='dbc--footer-container'>
                <a href='x.com'><img src={xIcon}/></a>
                <a href='facebook.com'><img src={fbIcon}/></a>
                <a href='instagram.com'><img src={igIcon}/></a>
                <a href='github.com'><img src={ghIcon}/></a>
            </div>
        </footer>
    )
}

export default Footer