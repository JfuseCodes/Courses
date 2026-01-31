// import reactLogo from './'
import '../../styles/reactfacts.css'
import Navbar from '../../project_components/react-facts/navbar'
import Main from '../../project_components/react-facts/main'
import Footer from '../../project_components/react-facts/footer'

const ReactFacts = () => {
    return (
        <section className={'section--parent-container'}>
            <section className={'section--child-container'}>
                <Navbar />
                <Main />
                {/* <Footer /> */}
            </section>
        </section>
    )
}

export default ReactFacts