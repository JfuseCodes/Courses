const Main = () => {

    return (
         <main className={'main'}>
                <div><div className='main--header-parent'>
                    <h1 className='inter-main--heading main--header-heading'>Fun facts about React</h1>
                </div>
                <div className='main--list-parent'>
                    <ul className='inter-main--list main--list'>
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
                </div></div>
                <div className="main--react-logo-parent">
                    <div className="main--react-logo-child">
                        <img className='main--react-logo' src='./src/assets/react-facts/main--react-logo.svg' />
                    </div>
                </div>
            </main>
    )
}

export default Main