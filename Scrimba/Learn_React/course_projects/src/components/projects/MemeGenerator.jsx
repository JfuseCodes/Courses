import '../styles/css/meme-generator.css'
import Header from "../project_components/meme-generator/Header"
import Main from "../project_components/meme-generator/Main"

export default function MemeGenerator() {
    return (
        <div className='mg--container'>
            <div className='mg--content-container'>
                <Header />
                <Main />
            </div>
        </div>
    )
}