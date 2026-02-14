import mtFujiPhoto from '../../../../assets/travel-journal/images/mtfuji.png'
import mapPin from '../../../../assets/travel-journal/map-pin.png'

const Entry = () => {


    const mapsLink = "Google Maps Link:https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"

    return (
        <><div className='tj--entry'>
            <div className='tj--entry-image-container'>
                <img src={mtFujiPhoto} alt='picture of mount fuji'/>
            </div>
            <div className='tj--entry-details tj--primary-dark'>
                <div className='ed-header'>
                    <div className='ed--heading'>
                        <div className='ed-location'>
                            
                            <div className='ed-location--name'>
                                <img src={mapPin} about='location symbol'/>
                                <span className= 'location--country fs-10'>JAPAN</span>
                            </div>
                            <div className='ed-location--link fs-10'>
                                <a className='location--google-link' href={mapsLink}>View on Google Maps</a>
                            </div>
                        </div>
                        <div className='ed-location--name-landmark fs-25 fw-700'>
                            <span>Mount Fuji</span>
                        </div>
                    </div>
                </div>
                <div className='tj--ed-content'>
                    <div className='ed-content--timeline fs-10 fw-700 mt-9'>12 Jan, 2021 - 24 Jan, 2021</div>
                    <div className='ed-content--description fs-10 lh-150 fw-300 mt-9'>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </div>
                </div>
            </div>

            
        </div>
        <hr className='tj-entry-break' /> 
    
        </>

    )
}

export default Entry