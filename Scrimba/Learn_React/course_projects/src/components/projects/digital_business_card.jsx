import Header from "../project_components/digital-business-card/header"
import Main from "../project_components/digital-business-card/main"
import Footer from "../project_components/digital-business-card/footer"
// import './../../styles/css/digital_business_card.css'
import './../styles/css/digital_business_card.css'

const DigitalBusinessCard = () => {
   return (
    <section className='dbc--section-container'>
        <section className='dbc--section-child'>
            <Header />
            <Main />
            <Footer />
        </section>
    </section>
   )
}

export default DigitalBusinessCard