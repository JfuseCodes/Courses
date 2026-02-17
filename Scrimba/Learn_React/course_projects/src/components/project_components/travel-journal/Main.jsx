import Entry from "./sub-components/Entry"
import data from './../travel-journal/sub-components/data.js'

const Main = () => {

    
    const travelEntries = data.map((entry) => {
        return <Entry 
                id={entry.id}
                img={entry.img}
                title= {entry.title}
                country= {entry.country}
                googleMapsLink = {entry.googleMapsLink}
                dates = {entry.dates}
                text = {entry.text}
        />
    })

    return (
        <main className='tj--main-container'>
            <div className='tj--main-content'>
                {travelEntries}
            </div>
        </main>
    )
}

export default Main