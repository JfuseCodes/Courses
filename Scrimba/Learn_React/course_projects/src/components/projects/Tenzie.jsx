import Header from "../project_components/tenzie/Header"
import Main from "../project_components/tenzie/Main"
import '../styles/css/tenzies.css'

export default function Tenzie(){

    return (
        <div className='tenzie--container'>
            <div className='tenzie--content-container'>
                <Header />
                <Main />
            </div>
        </div>
    )
}