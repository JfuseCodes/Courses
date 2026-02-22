import './../styles/css/chef-claude.css';
import Header from '../project_components/chef-claude/Header.jsx'
import Main from '../project_components/chef-claude/Main.jsx';

export default function ChefClaude(){

    return (
        <div className='cc--container'>
            <div className='cc--content-container'>
                <Header />
                <Main />
            </div>
        </div>
    )
}