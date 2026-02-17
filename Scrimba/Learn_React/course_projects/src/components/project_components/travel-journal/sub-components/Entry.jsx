import mapPin from '../../../../assets/travel-journal/map-pin.png'


const Entry = (props) => {

    return (
        <><div className='tj--entry'>
            <div className='tj--entry-image-container'>
                <img src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className='tj--entry-details tj--primary-dark'>
                <div className='ed-header'>
                    <div className='ed--heading'>
                        <div className='ed-location'>
                            
                            <div className='ed-location--name'>
                                <img src={mapPin} about='location symbol'/>
                                <span className= 'location--country fs-10'>{props.country}</span>
                            </div>
                            <div className='ed-location--link fs-10'>
                                <a className='location--google-link' href={props.googleMapsLink}>View on Google Maps</a>
                            </div>
                        </div>
                        <div className='ed-location--name-landmark fs-25 fw-700'>
                            <span>{props.title}</span>
                        </div>
                    </div>
                </div>
                <div className='tj--ed-content'>
                    <div className='ed-content--timeline fs-10 fw-700 mt-9'>{props.dates}</div>
                    <div className='ed-content--description fs-10 lh-150 fw-300 mt-9'>
                        {props.text}
                    </div>
                </div>
            </div>

            
        </div>
        <hr className='tj-entry-break' /> 
    
        </>

    )
}

export default Entry