import React from 'react'
import Data from "./Data"
import ProgrammingLanguage from './ProgrammingLanguage'

export default function Main() {
    const [programmingLanguages, setProgrammingLanguages] = React.useState(Data)
    console.log(programmingLanguages)
    const programmingLanguageSection = programmingLanguages.map(language => {
        return <ProgrammingLanguage 
                    id={language.id}
                    key={language.id}
                    name={language.languageName}
                    backgroundColor={language.colorTheme}
                    textColor={language.textColor}
                    active={language.isActive} 
                />
    })
    
    return(
        <main className='AEG--main-container'>
            <div className='AEG--content-container'>
                {/* Message goes here */}
                <section className='AEG--PLS-container'>
                    {programmingLanguageSection}
                </section>
            </div>
        </main>
    )
}