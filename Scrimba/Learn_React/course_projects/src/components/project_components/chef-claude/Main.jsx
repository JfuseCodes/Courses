import React from 'react'
import Recipe from './Recipe'
import Ingredients from './Ingredients'
import { getRecipeFromMistral } from './ai'
// import Form from "./Form"


export default function Main () {


    const [ingredients, setIngredients] = React.useState(['all the main spices', 'pasta', 'ground beef', 'tomato paste' ])
    const [recipe, setRecipe] = React.useState(null)
    const [recipeShown, setRecipeShown] = React.useState(false)
    const recipeSection = React.useRef(null)
    
    console.log(recipeSection)
    // const getRecipe = () => {
    //     setRecipeShown(prevValue => !prevValue);
    // }

    React.useEffect(() => {
        recipe != "" || null & recipeShown != null ? recipeSection.current.scrollIntoView() : null
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
        setRecipeShown( prevValue => !prevValue)
    }
    

    const addIngredient = formData => {
 
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main className='cc--main-container'>
            <div className='cc--main-content'>
                <form className='cc--form' action={addIngredient}>
                    <input 
                    aria-label="Add ingredient"
                    className='cc--form-input'
                    placeholder="e.g. oregano"
                    type="text" 
                    name="ingredient"
                    required
                    />
                    <button className='cc--form-button fs-14 fw-300 h-38'>Add ingredient</button>
                </form>
                
                <Ingredients list={ingredients} handleClick={getRecipe} ref={recipeSection}/>
                {recipeShown === true && <Recipe  recipe={recipe}/>}
            </div>
        </main>
    )
}