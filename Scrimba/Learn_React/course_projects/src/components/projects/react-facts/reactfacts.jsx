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
                    <li>
                        <span>Was first released in 2013</span>
                    </li>
                    <li>
                        <span>Was originally created by Jordan Walke</span>
                    </li>
                    <li>
                        <span>Has well over 100K stars on GitHub</span>
                    </li>
                    <li>
                        <span>Is maintained by Meta</span>
                    </li>
                    <li>
                        <span>Powers thousands of enterprise apps, including mobile apps</span>
                    </li>
                </ul>
            </main>
        </section>
    )
}

export default ReactFacts