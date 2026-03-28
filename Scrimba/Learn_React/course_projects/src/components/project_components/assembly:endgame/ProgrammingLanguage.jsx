import skull from '../../../assets/assembly-endgame/skull.png'
export default function ProgrammingLanguage(props) {


    const backgroundColor = {
        backgroundColor: props.backgroundColor,
    }

    return(
        <><div style={backgroundColor} className={
            `fs-12 fw-700 programming-language
            isActive
            div${props.id} 
            ${props.languageName} 
            ${props.textColor == "white" ? "primary-light" : "primary-dark"}
            ${props.isActive === false && 'dead'}`

        }>
            <p>{props.name} </p>
        </div>
        {props.isActive === false && <span className='skull-parent'><img className={`skull ${props.name}`} src={skull}/></span>}
        </>
    )
}