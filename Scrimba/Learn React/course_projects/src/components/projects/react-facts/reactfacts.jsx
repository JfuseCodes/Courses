// import reactLogo from './'
import '../../styles/reactfacts.css'

const ReactFacts = () => {
    return (
        <section>
            <header>
                <img width={"40px"} src="./src/assets/react.svg" alt="react-logo" />
                <h1>Fun facts about React</h1>
            </header>
            <main>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </section>
    )
}

export default ReactFacts