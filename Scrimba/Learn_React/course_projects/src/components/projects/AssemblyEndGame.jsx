import Header from '../project_components/assembly:endgame/Header'
import Main from '../project_components/assembly:endgame/Main'
import '../styles/css/assembly-endgame.css';
export default function AssemblyEndGame () {
    return(
        <div className={'AEG--container'}>
            <div className={'AEG--content-container'}>
                <Header />
                <Main />
            </div>
        </div>
    )
}