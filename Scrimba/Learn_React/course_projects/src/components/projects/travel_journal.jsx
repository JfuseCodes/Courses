import './../styles/css/travel_journal.css'
import Header from '../project_components/travel-journal/header.jsx'
import Main from '../project_components/travel-journal/Main.jsx'

const TravelJournal = () => {

    return (
        <section className='tj--container'>
            <div className='tj--content-container'>
                <Header />
                <Main />
            </div>
        </section>
    )
}

export default TravelJournal