export default function Ingredients(props) {
 

        const randomNumInt = (max) => Math.floor(Math.random() * max)
    

const ingredientList = props.list.map( ingredient => {
        return <li className='cc--list-item' key={randomNumInt(100000)}>{ingredient}</li>
    })
    
    return (
         <>
         
        {ingredientList.length > 0 && 
                    <section className='cc--ingredients-section'>
                        <h2 className='cc--ingredients-heading fs-30'>Ingredients on hand:</h2>
                        <ul className='cc--ingredient-list'>
                            {ingredientList}
                        </ul>

                {ingredientList.length >= 4             
                            &&
                            <div className='cc--get-recipe-container'>
                            <div className='cc--get-recipe-content'>
                                <div className='cc--gr-text'>
                                    <h3 className='cc--gr-heading fs-18'>Ready for recipe?</h3>
                                    <p className='cc--gr-p fw-200 fs-14 lh-20'>Generate a recipe from your list of ingredients.</p>
                                </div>
                                <div className='cc--gr-button-container'>
                                    <button className='cc--gr-button fs-14 fw-200 h-38' onClick={props.handleClick}>Get a recipe</button>
                                </div>
                            </div>
                            </div>
                }
                    </section>
        }

        </>               
    )
 
}