export default function ProgrammingLanguage(props) {
    console.log(props.name)

    const backgroundColor = {
        backgroundColor: props.backgroundColor,
    }

    return(
        <div style={backgroundColor} className={
            `fs-12 fw-700 programming-language
            isActive
            div${props.id} 
            ${props.languageName} 
            ${props.textColor == "white" ? "primary-light" : "primary-dark"}`
        }>
            {props.name}
        </div>
    )
}