import info from './options.js'

export default function StartMenu(props) {
    // console.log(categoryList.trivia_categories)
   
    const categories = info.trivia_categories.map( category => {
        return (<option value={category.id} name={category.id}>{category.name}</option>)
    })

    const difficulties = info.trivia_difficulties.map( difficulty => {
        return (<option value={difficulty.name} >{difficulty.name}</option>)
    })

    const questionTypes = info.trivia_question_types.map( questionType => {
        return (<option value={questionType.name} >{questionType.text}</option>)
    })



    return (
        <div className='q--start-menu-container'>
            <div className='q--start-menu-heading text-darkblue'>
                <h1 className='ff-karla fs-32 fw-700'>Quizzical</h1>
                <section className='ff-inter fs-16 fw-300 mt-7'>
                    <form className='q--start-menu-form' action={props.handleClick}>
                        <label htmlFor="number">Number of Questions</label>
                        <br />
                        <input name="quizLength" id="quizLength" type="number" defaultValue={5}/>
                        <br />

                        <label htmlFor="category">Select a category</label>
                        <select id="category" name="category" defaultValue="Any Category">
                            {categories}
                        </select>
                        <br />

                        <label htmlFor="difficulty" >Select difficulty:</label>
                        <select id="difficulty" name="difficulty" defaultValue="Any Difficulty">
                            {difficulties}
                        </select>
                        <br />

                        <label htmlFor="questionType" defaultValue="Any Type">Select question type:</label>
                        <select id="questionType" name="questionType">
                            {questionTypes}
                        </select>

                        <div className='q--start-button-container'>
                            <button 
                            // onClick={props.handleClick}
                            className='q--primary-button q--btn-start-menu'>Start quiz</button>
                        </div>
                    </form>
                </section>
            </div>
            
        </div>
    )
}